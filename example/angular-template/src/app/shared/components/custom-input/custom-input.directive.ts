import { Directive, HostBinding } from '@angular/core';
import { NgControl, AbstractControl } from '@angular/forms';

@Directive({
	selector: '[appInputRef]'
})
export class InputRefDirective {
	constructor(private formControl: NgControl) {}

	get hasError() {
		return this.formControl.dirty && this.formControl.invalid;
	}

	get errors() {
		if (this.hasError && this.formControl.errors) {
			return this.formControl.errors;
		}
		return '';
	}

	get isRequired(): boolean {
		if (
			this.formControl &&
			this.formControl.control &&
			this.formControl.control.validator
		) {
			const validator = this.formControl.control.validator(
				{} as AbstractControl
			);

			return validator && validator.required;
		}
		return false;
	}

	get isDisabled(): boolean {
		return this.formControl.control.disabled;
	}

	@HostBinding('class.invalid-field')
	get StatusInvalid() {
		if (this.formControl.control == null) {
			return false;
		}
		return this.formControl.control.invalid && this.formControl.dirty;
	}
}
