import Field from './field';
import { renderDatePicker } from '../../render-strategy/render-datepicker';

type DatePicker = {
    // Could be text, number, email....
    inputType: string;
    pattern?: string;
    maxLength?: number;
    minLength?: number;
    max?: number;
    min?: number;
    mask?: string;
}

export type DatePickerField = DatePicker & Field;

export const getDatePicker = (obj: DatePickerField): DatePickerField => {
    const interfaceValueType = 'string';

    const datePickerField: DatePickerField = {
        label: obj.label,
        elementType: 'date-picker',
        key: obj.key,
        interfaceValueType,
        isRequired: obj.isRequired || false,
        customClass: obj.customClass || 'form-control',
        disabled: obj.disabled || false,
        readOnly: obj.readOnly || false,
        inputType: obj.inputType,
        renderFormField: renderDatePicker
    }

    if (!!obj.tooltip) {
        datePickerField['tooltip'] = obj.tooltip;
    }

    if (!!obj.pattern) {
        datePickerField['pattern'] = obj.pattern
    }
    if (!!obj.maxLength) {
        datePickerField['maxLength'] = obj.maxLength
    }
    if (!!obj.minLength) {
        datePickerField['minLength'] = obj.minLength
    }
    if (!!obj.max) {
        datePickerField['max'] = obj.max
    }
    if (!!obj.min) {
        datePickerField['min'] = obj.min
    }
    if (!!obj.mask) {
        datePickerField['mask'] = obj.mask
    }

    return datePickerField;
}