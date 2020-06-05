import { CheckboxField } from "../models/form-fields/checkbox.model"
import { strings } from '@angular-devkit/core';
import { getTooltip } from "./render-tooltip";

export const renderCheckbox = (prop: CheckboxField): string => {

  return `
    <div class="col-6">
      <div class="form-group">
          <p>${prop.label}</p>${getTooltip(prop)}
          <div class="form-check">
            <label for="${prop.key}All" class="form-check-label">
              <input
                type="checkbox"
                class="${prop.customClass}"
                id="${prop.key}All"
                (click)="toggleAll${strings.classify(prop.key)}()"
                name="All"
              />
                All
              </label>
            </div>
            <div class="form-check" *ngFor="let option of ${prop.key}Controls.controls; let i=index">
              <label 
                class="form-check-label"
                for="${prop.key}{{${prop.key}Checkboxes[i].label}}"
              >
              <input 
                type="checkbox"
                class="${prop.customClass}"
                id="${prop.key}{{${prop.key}Checkboxes[i].label}}"
                [formControl]="option"
                /> 
                {{${prop.key}Checkboxes[i].label}}
              </label>
            </div>
        </div>
    </div>`
}