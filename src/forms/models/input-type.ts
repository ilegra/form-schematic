import { SelectOption } from "./select-option.model";

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
	elementType?: string;
	options?: SelectOption[];
	disabled?: boolean;
	readOnly?: boolean;
	customClass?: string;
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
	public elementType?: string;
	public options?: SelectOption[];
	public disabled?: boolean;
	public readOnly?: boolean;
	public customClass?: string;

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
		this.elementType = data.elementType || 'input';
		this.options = data.options;
		this.disabled = data.disabled;
		this.readOnly = data.readOnly;
		this.customClass = data.customClass;
	}

	getTypeInput(type: string): string {
		return inputTypeMapper[type];
	}
}
