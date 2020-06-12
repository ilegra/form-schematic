import { FormField } from "../models/form-fields/field";

export const getTooltip = (prop: FormField) => {
    if (prop.tooltip) {
        return `
            <i
                ngbTooltip="${prop.tooltip}"
                placement="top"
                container="body"
                tabindex="0"
                class="validation-popover"
                aria-label="${prop.key}"
                aria-describedby="${prop.key}-tip"
                aria-controls="${prop.key}-tip"
            ></i>`
    }
  
    return '';
  }