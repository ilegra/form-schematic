import Field from "./field";
import { CheckboxOption } from "./checkbox-option.model";
import { renderCheckbox } from "../../render-strategy/render-checkbox";

type Checkbox = {
    options?: CheckboxOption[];
}

export type CheckboxField = Checkbox & Field;

export const getCheckbox = (obj: CheckboxField): CheckboxField => {
    const checkboxField: CheckboxField = {
        label: obj.label,
        elementType: 'checkbox',
        interfaceValueType: 'string',
        key: obj.key,
        isRequired: obj.isRequired || false,
        options: obj.options || [],
        customClass: obj.customClass || 'form-control',
        disabled: obj.disabled || false,
        readOnly: obj.readOnly || false,
        renderFormField: renderCheckbox
    };

    if (!!obj.tooltip) {
        checkboxField['tooltip'] = obj.tooltip;
    }
    
    return checkboxField;
}