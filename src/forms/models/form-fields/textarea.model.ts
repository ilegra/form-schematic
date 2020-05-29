import Field from "./field";

export interface Textarea extends Field {
    rows: number;
    columns: number;
}

export const getTextArea = (obj: any): Textarea => {
    return {
        label: obj.label,
        elementType: 'textarea',
        columns: obj.columns || 30,
        interfaceValueType: 'string',
        key: obj.key,
        rows: obj.rows || 5,
        customClass: obj.customClass || 'form-control',
        disabled: obj.disabled || false,
        readOnly: obj.readOnly || false,
    }
}