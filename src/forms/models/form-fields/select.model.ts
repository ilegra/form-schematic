import Field from './field';
import { Option } from './option.model';
import { renderSelect } from '../../partial-strategies/render-select';

type Select = {
    options?: Option[];
    defaultValueOption: string;
}

export type SelectField = Select & Field;

export const getSelect = (obj: SelectField): SelectField => {
    const selectField: SelectField = {
        defaultValueOption: obj.defaultValueOption,
        label: obj.label,
        elementType: 'select',
        interfaceValueType: 'number[]',
        key: obj.key,
        isRequired: obj.isRequired || false,
        options: obj.options || [],
        customClass: obj.customClass || 'form-control',
        disabled: obj.disabled || false,
        readOnly: obj.readOnly || false,
        renderFormField: renderSelect
    };

    if (!!obj.tooltip) {
        selectField['tooltip'] = obj.tooltip;
    }

    return selectField;
}