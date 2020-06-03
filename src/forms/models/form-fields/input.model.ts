import Field from './field';
import { renderInput } from '../../render-strategy/render-input';
import { i18nString } from '../18n-type';

// This mapper is used to discovery the interface value, for now is everything string but we can change if we need
const inputTypeMapper = {
    text: 'string',
    number: 'number',
    tel: 'string',
    button: 'string',
    checkbox: 'string',
    color: 'string',
    date: 'string',
    email: 'string',
    file: 'string',
    hidden: 'string',
    image: 'string',
    month: 'string',
    password: 'string',
    radio: 'string',
    range: 'string',
    reset: 'string',
    search: 'string',
    submit: 'string',
    time: 'string',
    url: 'string',
    week: 'string'
}

type Input = {
    // Could be text, number, email....
    inputType: string;
    pattern?: string;
    maxLength?: number;
    minLength?: number;
    max?: number;
    min?: number;
    mask?: string;
    placeholder?: i18nString | string;
}

export type InputField = Input & Field;

export const getInput = (obj: InputField): InputField => {
    const interfaceValueType = obj.interfaceValueType || inputTypeMapper[obj.inputType] || inputTypeMapper.text;

    const inputField: InputField = {
        label: obj.label,
        elementType: 'input',
        key: obj.key,
        interfaceValueType,
        customClass: obj.customClass || 'form-control',
        disabled: obj.disabled || false,
        isRequired: obj.isRequired || false,
        readOnly: obj.readOnly || false,
        inputType: obj.inputType,
        renderFormField: renderInput
    }

    if (!!obj.tooltip) {
        inputField['tooltip'] = obj.tooltip;
    }

    if (!!obj.placeholder) {
        inputField['placeholder'] = obj.placeholder;
    }

    if (!!obj.initialValue) {
        inputField['initialValue'] = obj.initialValue;
    }

    if (!!obj.pattern) {
        inputField['pattern'] = obj.pattern
    }
    if (!!obj.maxLength) {
        inputField['maxLength'] = obj.maxLength
    }
    if (!!obj.minLength) {
        inputField['minLength'] = obj.minLength
    }
    if (!!obj.max) {
        inputField['max'] = obj.max
    }
    if (!!obj.min) {
        inputField['min'] = obj.min
    }
    if (!!obj.mask) {
        inputField['mask'] = obj.mask
    }

    return inputField;
}