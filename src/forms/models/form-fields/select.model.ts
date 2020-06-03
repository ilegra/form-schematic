import Field from './field';
import { Option } from './option.model';
import { renderSelect } from '../../render-strategy/render-select';
import { i18nString } from '../18n-type';

type Select = {
    options?: Option[];
    defaultValueOption: i18nString | string;
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