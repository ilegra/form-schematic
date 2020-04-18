import { basename, dirname, normalize, Path } from '@angular-devkit/core';
import { dasherize } from '@angular-devkit/core/src/utils/strings';

export const parseName = (
	path: string,
	name: string
): { name: string; path: Path } => {
	const nameWithoutPath = basename(name as Path);
	const namePath = dirname((path + '/' + name) as Path);

	return {
		name: dasherize(nameWithoutPath),
		path: normalize('/' + namePath)
	};
};
