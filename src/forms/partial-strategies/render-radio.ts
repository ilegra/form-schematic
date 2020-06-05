import { RadioField } from "../models/form-fields/radio.model";
import { getTooltip } from "./render-tooltip";

export const renderRadio = (prop: RadioField) => {
    return `
        <div class="col-6">
            <div class="form-group"> 
                <label for="${prop.key}">
                    ${prop.label}
                </label>${getTooltip(prop)}
                <label class="display-block" *ngFor="let option of ${prop.key}Options">
                    <input
                        formControlName="${prop.key}"
                        name="${prop.key}"
                        [value]="option.value"
                        type="radio"
                    /> 
                    {{ option.label }}
                </label>
            </div>
        </div>`

}