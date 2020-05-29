export default interface Field {
    interfaceValueType: string;
    label: string;
    key: string;
    disabled?: boolean;
    readOnly?: boolean;
    customClass?: string;
    elementType: string;
    // @TODO: Validations: validation[]
}