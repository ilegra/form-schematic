import { strings } from "@angular-devkit/core"
import { InputField } from "../models/form-fields/input.model";
import { getTooltip } from "./render-tooltip";

export const renderInput = (prop: InputField) => {
    return `
        <div class="col-6">
            <div class="form-group">
                <label for="${prop.key}">
                    ${prop.label}
                </label>${getTooltip(prop)}
                <input
                    formControlName="${prop.key}"
                    name="${prop.key}"
                    type="${prop.inputType}"
                    class="${prop.customClass}"
                    id="${strings.dasherize('input-' + prop.key)}" 
                    ${prop.isRequired ? 'required': ''}${
                        prop.placeholder ? `
                    placeholder="${prop.placeholder}"`: ''}
                    ${prop.maxLength || prop.maxLength === 0 ? `
                    maxLength=${prop.maxLength}`: ''}${
                        prop.minLength || prop.minLength === 0 ? `
                    minLength=${prop.minLength}`: ''}${
                        prop.min || prop.min === 0 ? `
                        min=${prop.min}`: ''}${
                        prop.max || prop.max === 0 ? `
                        max=${prop.max}`: ''}${
                        prop.mask ? `
                        mask="${prop.mask}"`: ''}${
                        prop.readOnly ? `
                        [readonly]="true"`: ''}
                /> 
            </div>
        </div>`
}