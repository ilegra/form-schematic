import { getCheckbox } from './form-fields/checkbox.model';
import { getInput } from './form-fields/input.model';
import { getRadio } from './form-fields/radio.model';
import { getSelect } from './form-fields/select.model';
import { getTextArea } from './form-fields/textarea.model';
import { FormField } from './form-fields/field';

enum FormFieldTypes {
	INPUT = 'input',
	SELECT = 'select',
	TEXT_AREA = 'textarea',
	DATE = 'date-picker',
	RADIO = 'radio',
	CHECKBOX = 'checkbox'
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
			// @TODO transform this in a factory method
			switch (elementType) {
				case FormFieldTypes.INPUT:
					return getInput({ key, ...propertiesObj[key] })
				case FormFieldTypes.RADIO:
					return getRadio({ key, ...propertiesObj[key] })
				case FormFieldTypes.CHECKBOX:
					return getCheckbox({ key, ...propertiesObj[key] })
				case FormFieldTypes.SELECT:
					return getSelect({ key, ...propertiesObj[key] })
				case FormFieldTypes.TEXT_AREA:
					return getTextArea({ key, ...propertiesObj[key] })
				default:
					throw Error('Invalid property error ' + elementType);
			}
		});
	}
}
