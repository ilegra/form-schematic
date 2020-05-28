import Field from "./field";
import { SelectOption } from '../select-option.model';

export interface Select extends Field {
    options?: SelectOption[];
    defaultValueOption: string;
}

export const getSelect = (obj: Select): Select => {
    return {
        defaultValueOption: 'Select an option',
        label: obj.label,
        elementType: 'select',
        interfaceValueType: 'number[]',
        key: obj.key,
        options: obj.options || [],
        customClass: obj.customClass || 'form-control',
        disabled: obj.disabled || false,
        readOnly: obj.readOnly || false,
    }
}