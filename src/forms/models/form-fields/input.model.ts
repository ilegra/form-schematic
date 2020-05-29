import Field from './field';

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
        readOnly: obj.readOnly || false,
        inputType: obj.inputType
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