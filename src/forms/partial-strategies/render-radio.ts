import { RadioField } from "../models/form-fields/radio.model";
import { getTooltip } from "./render-tooltip";

export const renderRadio = (prop: RadioField) => {
    return `
        <div class="col-6">
            <div class="form-group"> 
                <p for="${prop.key}">
                    ${prop.label}
                </p>${getTooltip(prop)}
                <div class="form-check form-check-inline"  *ngFor="let option of ${prop.key}Options">
                    <input
                        formControlName="${prop.key}"
                        name="${prop.key}"
                        [value]="option.value"
                        type="radio"
                    /> 
                    <label class="form-check-label" for="${prop.key}">{{ option.label }} </label>
                </div>
            </div>
        </div>`

}