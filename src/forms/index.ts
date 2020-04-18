import {
	Rule,
	SchematicContext,
	Tree,
	apply,
	url,
	template,
	renameTemplateFiles,
	chain,
	branchAndMerge,
	mergeWith,
	move
} from '@angular-devkit/schematics';
import { strings, normalize } from '@angular-devkit/core';
import { workspace } from '@angular-devkit/core/src/experimental';
import { NotValidAngularWorkspace } from './exceptions/exception-not-workspace';
import { ProjetTypeEnum } from './models/project-type.enum';
import { parseName } from './utils/parsers';
import { OptionsFormSchema } from './models/options-schema';
import { FormJsonNotFoundError } from './exceptions/form-json-not-found';
import { FormJson } from './models/form-json.model';
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function forms(_options: OptionsFormSchema): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		// Log
		// context.logger.info('Info message');
		// context.logger.warn('Warn message');
		// context.logger.error('Error message');
		const workspaceConfig = tree.read('/angular.json');
		const jsonFormConfig = tree.read('/form.json');

		if (!workspaceConfig) {
			throw new NotValidAngularWorkspace();
		}

		if (!jsonFormConfig) {
			throw new FormJsonNotFoundError();
		}

		const workspaceContent = workspaceConfig.toString();
		const jsonFormContent = jsonFormConfig.toString();

		const workspace: workspace.WorkspaceSchema = JSON.parse(
			workspaceContent
		);

		const formJsonObj = new FormJson(JSON.parse(jsonFormContent));

		if (!_options.project) {
			_options.project = workspace.defaultProject || '';
		}

		const projectName = _options.project;
		const project = workspace.projects[projectName];

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

		return chain([branchAndMerge(chain([mergeWith(templateSource)]))])(
			tree,
			_context
		);
	};
}
