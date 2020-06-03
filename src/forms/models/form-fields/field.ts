import { i18nString } from "../18n-type";
import { InputField } from "./input.model";
import { SelectField } from "./select.model";
import { TextareaField } from "./textarea.model";
import { DatePickerField } from "./date-picker.model";
import { RadioField } from "./radio.model";
import { CheckboxField } from "./checkbox.model";

export default interface Field {
    interfaceValueType: string;
    label: i18nString | string;
    elementType: string;
    key: string;
    isRequired: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    customClass?: string;
    tooltip?: i18nString | string;
    initialValue?: string;
    renderFormField: (pro: any) => string;
    // @TODO: Validations: validation[]
}

export type FormField = InputField | SelectField | TextareaField | DatePickerField | RadioField | CheckboxField;
