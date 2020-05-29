import { InputField, getInput } from './form-fields/input.model';
import { Select, getSelect } from './form-fields/select.model';
import { Textarea, getTextArea } from './form-fields/textarea.model';

type FormField = InputField | Select | Textarea;
enum FormFieldTypes {
	INPUT = 'input',
	SELECT = 'select',
	TEXT_AREA = 'textarea'
}

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
	// Array with formElements inputs, selects, textarea ...
	public properties: FormField[];
	public required: string[];

	constructor(data: FormJsonInterface) {
		this.type = data.type;
		this.title = data.title;
		this.description = data.description;
		this.properties = this.getPropertiesInArray(data.properties);
		this.required = data.required;
	}

	// Method to return a FormField array
	getPropertiesInArray(propertiesObj: any): FormField[] {
		return Object.keys(propertiesObj).map(key => {
			const elementType = propertiesObj[key].elementType || FormFieldTypes.INPUT;

			switch (elementType) {
				case FormFieldTypes.INPUT:
					return getInput({ key, ...propertiesObj[key] })
					break;
				case FormFieldTypes.SELECT:
					return getSelect({ key, ...propertiesObj[key] })
					break;
				case FormFieldTypes.TEXT_AREA:
					return getTextArea({ key, ...propertiesObj[key] })
					break;
				default:
					throw Error('Invalid property error ' + elementType);
					break;
			}
		});
	}
}
