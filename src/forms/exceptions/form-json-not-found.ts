export class FormJsonNotFoundError extends Error {
	constructor() {
		super();
		this.message = 'Could not find form.json file';
		this.name = 'FormJsonNotFoundError';
	}
}
