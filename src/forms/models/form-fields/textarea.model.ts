import Field from "./field";
import { renderTextArea } from "../../render-strategy/render-textarea";

type Textarea = {
    rows: number;
    columns: number;
    placeholder?: string;
}

export type TextareaField = Textarea & Field;

export const getTextArea = (obj: any): TextareaField => {
    const textAreaField: TextareaField = {
        label: obj.label,
        elementType: 'textarea',
        columns: obj.columns || 30,
        interfaceValueType: 'string',
        key: obj.key,
        isRequired: obj.isRequired || false,
        rows: obj.rows || 5,
        customClass: obj.customClass || 'form-control',
        disabled: obj.disabled || false,
        readOnly: obj.readOnly || false,
        renderFormField: renderTextArea
    }

    if (!!obj.tooltip) {
        textAreaField['tooltip'] = obj.tooltip;
    }

    if (!!obj.placeholder) {
        textAreaField['placeholder'] = obj.placeholder;
    }

    return textAreaField;
}