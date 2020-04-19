import { normalize, strings } from '@angular-devkit/core';
import { workspace } from '@angular-devkit/core/src/experimental';
import {
	apply,
	branchAndMerge,
	chain,
	mergeWith,
	move,
	renameTemplateFiles,
	Rule,
	SchematicContext,
	template,
	Tree,
	url
} from '@angular-devkit/schematics';
import {
	addDeclarationToModule,
	addEntryComponentToModule,
	addExportToModule,
	addModuleImportToModule,
	findModuleFromOptions
} from '@angular/cdk/schematics';
import { InsertChange } from '@schematics/angular/utility/change';
import { buildRelativePath } from '@schematics/angular/utility/find-module';
import { NotValidAngularWorkspace } from './exceptions/exception-not-workspace';
import { FormJsonNotFoundError } from './exceptions/form-json-not-found';
import { FormJson } from './models/form-json.model';
import { OptionsFormSchema } from './models/options-schema';
import { ProjetTypeEnum } from './models/project-type.enum';
import { readIntoSourceFile } from './utils/file';
import { parseName } from './utils/parsers';
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function forms(_options: OptionsFormSchema): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		// Log
		// context.logger.info('Info message');
		// context.logger.warn('Warn message');
		// context.logger.error('Error message');
		const workspaceConfig = tree.read('/angular.json');

		if (!workspaceConfig) {
			throw new NotValidAngularWorkspace();
		}

		const workspaceContent = workspaceConfig.toString();

		const workspace: workspace.WorkspaceSchema = JSON.parse(
			workspaceContent
		);

		if (!_options.project) {
			_options.project = workspace.defaultProject || '';
		}

		const projectName = _options.project;
		const project = workspace.projects[projectName];

		const jsonFormConfig = tree.read(`${_options.config}`);

		if (!jsonFormConfig) {
			throw new FormJsonNotFoundError();
		}

		const jsonFormContent = jsonFormConfig.toString();

		const formJsonObj = new FormJson(JSON.parse(jsonFormContent));

		const projectType =
			project.projectType === 'application'
				? ProjetTypeEnum.APP
				: ProjetTypeEnum.LIB;

		if (!_options.path) {
			_options.path = `${project.sourceRoot}/${projectType}`;
		}
		const parsedOptions = parseName(_options.path, _options.name);
		_options = { ..._options, ...parsedOptions };

		const templateSource = apply(url('./templates/forms'), [
			renameTemplateFiles(),
			template({
				...strings,
				..._options,
				formJsonObj
			}),
			move(normalize((_options.path + '/' + _options.name) as string))
		]);

		return chain([
			branchAndMerge(chain([mergeWith(templateSource)])),
			addTreeModulesToModule(_options),
			addDeclarationsToModule(_options)
		])(tree, _context);
	};
}

function addTreeModulesToModule(options: any) {
	return (host: Tree) => {
		const modulePath = findModuleFromOptions(host, options)!;
		addModuleImportToModule(
			host,
			modulePath,
			'ReactiveFormsModule',
			'@angular/forms'
		);
		addModuleImportToModule(
			host,
			modulePath,
			'FormsModule',
			'@angular/forms'
		);

		return host;
	};
}

function addDeclarationsToModule(options: any) {
	return (host: Tree) => {
		const modulePath = findModuleFromOptions(host, options)!;
		let source = readIntoSourceFile(host, modulePath);

		const formPath =
			`/${options.path}/` +
			strings.dasherize(options.name) +
			'/' +
			strings.dasherize(options.name) +
			'-form.component';

		const relativePath = buildRelativePath(modulePath, formPath);

		const declarationChanges = addDeclarationToModule(
			source,
			modulePath,
			strings.classify(`${options.name}FormComponent`),
			relativePath
		);
		const declarationRecorder = host.beginUpdate(modulePath);
		for (const change of declarationChanges) {
			if (change instanceof InsertChange) {
				declarationRecorder.insertLeft(change.pos, change.toAdd);
			}
		}
		host.commitUpdate(declarationRecorder);

		if (options.export) {
			// Need to refresh the AST because we overwrote the file in the host.
			source = readIntoSourceFile(host, modulePath);

			const exportRecorder = host.beginUpdate(modulePath);
			const exportChanges = addExportToModule(
				source,
				modulePath,
				strings.classify(`${options.name}Component`),
				relativePath
			);

			for (const change of exportChanges) {
				if (change instanceof InsertChange) {
					exportRecorder.insertLeft(change.pos, change.toAdd);
				}
			}
			host.commitUpdate(exportRecorder);
		}

		if (options.entryComponent) {
			// Need to refresh the AST because we overwrote the file in the host.
			source = readIntoSourceFile(host, modulePath);

			const entryComponentRecorder = host.beginUpdate(modulePath);
			const entryComponentChanges = addEntryComponentToModule(
				source,
				modulePath,
				strings.classify(`${options.name}Component`),
				relativePath
			);

			for (const change of entryComponentChanges) {
				if (change instanceof InsertChange) {
					entryComponentRecorder.insertLeft(change.pos, change.toAdd);
				}
			}
			host.commitUpdate(entryComponentRecorder);
		}
		return host;
	};
}
