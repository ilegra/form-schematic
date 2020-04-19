export interface InputTypeInterface {
	title: string;
	type: string;
	key: string;
	pattern?: string;
	maxLength?: number;
	minLength?: number;
	max?: number;
	min?: number;
	inputType?: string;
	mask?: string;
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
	public max?: number;
	public min?: number;
	public mask?: string;
	public inputType?: string;

	constructor(data: InputTypeInterface) {
		this.label = data.title;
		this.type = data.type;
		this.key = data.key;
		this.pattern = data.pattern;
		this.maxLength = data.maxLength;
		this.minLength = data.minLength;
		this.max = data.max;
		this.min = data.min;
		this.mask = data.mask;
		this.inputType = data.inputType || this.getTypeInput(this.type);
	}

	getTypeInput(type: string): string {
		return inputTypeMapper[type];
	}
}
