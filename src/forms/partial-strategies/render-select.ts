import { SelectField } from "../models/form-fields/select.model";
import { getTooltip } from "./render-tooltip";

export const renderSelect = (prop: SelectField) => {
    return `
    <div class="col-6"> 
        <div class="form-group">
            <label for="${prop.key}">
                ${prop.label}
            </label>${getTooltip(prop)}
            <select
                name="${prop.key}"
                formControlName="${prop.key}"
                class="${prop.customClass}"${
                    prop.disabled ? '\n[disabled]="true"' : ''}>${
                    prop.readOnly ? '\n[readonly]="true"' : ''}
            />
            ${prop.defaultValueOption ? 
                `<option selected [value]="null" disabled> ${prop.defaultValueOption} </option>`: ''
            }
                <option *ngFor="let option of ${prop.key}Options" [value]="option.key"> {{ option.value }} </option>
            </select>
        </div>
    </div>`
}