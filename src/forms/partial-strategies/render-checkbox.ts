import { CheckboxField } from "../models/form-fields/checkbox.model"
import { strings } from '@angular-devkit/core';
import { getTooltip } from "./render-tooltip";

export const renderCheckbox = (prop: CheckboxField): string => {

  return `
    <div class="col-6">
      <div class="form-group">
          <label>${prop.label}</label>${getTooltip(prop)}
              <label for="${prop.key}All" class="display-block">
                <input
                  type="checkbox"
                  class="${prop.customClass}"
                  id="${prop.key}All"
                  (click)="toggleAll${strings.classify(prop.key)}()"
                  name="All"
                ></input>
                All
              </label>
              <label 
                *ngFor="let option of ${prop.key}Controls.controls; let i=index"
                class="display-block"
                for="${prop.key}{{${prop.key}Checkboxes[i].label}}"
              >
                <input 
                  type="checkbox"
                  class="${prop.customClass}"
                  id="${prop.key}{{${prop.key}Checkboxes[i].label}}"
                  [formControl]="option"
                  > 
                  </input>
                  {{${prop.key}Checkboxes[i].label}}
              </label>
            </div>
        </div>
    </div>`
}