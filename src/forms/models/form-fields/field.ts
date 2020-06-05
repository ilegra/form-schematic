import { InputField } from "./input.model";
import { SelectField } from "./select.model";
import { TextareaField } from "./textarea.model";
import { RadioField } from "./radio.model";
import { CheckboxField } from "./checkbox.model";

export default interface Field {
    interfaceValueType: string;
    label: string;
    elementType: string;
    key: string;
    isRequired: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    customClass?: string;
    tooltip?: string;
    initialValue?: string;
    renderFormField: (pro: any) => string;
    // @TODO: Validations: validation[]
}

export type FormField = InputField | SelectField | TextareaField  | RadioField | CheckboxField;
