import { InputType } from './input-type';

export interface FormJsonInterface {
	type: string;
	title: string;
	description: string;
	properties: Object;
	required: string[];
}

export class FormJson {
	public type: string;
	public title: string;
	public description: string;
	public properties: InputType[];
	public required: string[];

	constructor(data: FormJsonInterface) {
		this.type = data.type;
		this.title = data.title;
		this.description = data.description;
		this.properties = this.getPropertiesInArray(data.properties);
		this.required = data.required;
	}

	getPropertiesInArray(propertiesObj: any): InputType[] {
		return Object.keys(propertiesObj).map(key => {
			return new InputType({ ...propertiesObj[key], key });
		});
	}
}
