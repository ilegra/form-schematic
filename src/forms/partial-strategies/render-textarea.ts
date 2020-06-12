import { TextareaField } from "../models/form-fields/textarea.model";
import { strings } from "@angular-devkit/core";
import { getTooltip } from "./render-tooltip";

export const renderTextArea = (prop: TextareaField) => {
    return `
    <div class="col-6">
        <div class="form-group">
            <label for="${prop.key}">
                ${prop.label}
            </label>
            ${getTooltip(prop)}
            <textarea
                formControlName="${prop.key}"
                name="${prop.key}"
                class="${prop.customClass}"
                id="${strings.dasherize('input-' + prop.key)}"${
                prop.readOnly ? '\n[readonly]="true"' : ''} >${
                    prop.placeholder ? `
                placeholder="${prop.placeholder}"`: ''}
            </textarea>
        </div>
    </div>`
}