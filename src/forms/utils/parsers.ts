import { basename, dirname, normalize, Path } from '@angular-devkit/core';

export const parseName = (
	path: string,
	name: string
): { name: string; path: Path } => {
	const nameWithoutPath = basename(name as Path);
	const namePath = dirname((path + '/' + name) as Path);

	return {
		name: nameWithoutPath,
		path: normalize('/' + namePath)
	};
};
