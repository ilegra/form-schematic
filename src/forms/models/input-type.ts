export interface InputTypeInterface {
	title: string;
	type: string;
	key: string;
	pattern?: string;
	maxLength?: number;
	minLength?: number;
}

export class InputType implements InputTypeInterface {
	public title: string;
	public type: string;
	public key: string;
	public pattern?: string;
	public maxLength?: number;
	public minLength?: number;

	constructor(data: InputTypeInterface) {
		this.title = data.title;
		this.type = data.type;
		this.key = data.key;
		this.pattern = data.pattern;
		this.maxLength = data.maxLength;
		this.minLength = data.minLength;
	}
}
