import Field from "./field";
import { Option } from "./option.model";
import { renderRadio } from "../../render-strategy/render-radio";

type Radio = {
    options?: Option[];
}

export type RadioField = Radio & Field;

export const getRadio = (obj: RadioField): RadioField => {
    const radioField: RadioField = {
        label: obj.label,
        elementType: 'radio',
        interfaceValueType: 'string',
        key: obj.key,
        options: obj.options || [],
        isRequired: obj.isRequired || false,
        customClass: obj.customClass || 'form-control',
        disabled: obj.disabled || false,
        readOnly: obj.readOnly || false,
        renderFormField: renderRadio
    };

    if (!!obj.tooltip) {
        radioField['tooltip'] = obj.tooltip;
    }

    return radioField;
}