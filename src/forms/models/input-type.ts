export interface InputTypeInterface {
	title: string;
	type: string;
	key: string;
	pattern?: string;
	maxLength?: number;
	minLength?: number;
	inputType?: string;
}

const inputTypeMapper: any = {
	string: 'text',
	number: 'number'
};

export class InputType {
	public label: string;
	public type: string;
	public key: string;
	public pattern?: string;
	public maxLength?: number;
	public minLength?: number;
	public inputType?: string;

	constructor(data: InputTypeInterface) {
		this.label = data.title;
		this.type = data.type;
		this.key = data.key;
		this.pattern = data.pattern;
		this.maxLength = data.maxLength;
		this.minLength = data.minLength;
		this.inputType = data.inputType || this.getTypeInput(this.type);
	}

	getTypeInput(type: string): string {
		return inputTypeMapper[type];
	}
}
