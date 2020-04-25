import { Directive, TemplateRef, HostBinding } from '@angular/core';
import { NgControl, AbstractControl } from '@angular/forms';

// Here we cann change the class valid and invalid
enum controlStatusClassEnum {
	VALID = 'class.is-valid',
	INVALID = 'class.is-invalid'
}

@Directive({
	selector: '[appInputRef]'
})
export class InputRefDirective {
	constructor(private formControl: NgControl) {
		console.log(this.formControl.validator);
	}

	get isDisabled(): boolean {
		return this.formControl.control.disabled;
	}

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

	@HostBinding('class.is-valid')
	get StatusValid() {
		if (this.formControl.control == null) {
			return false;
		}
		return this.formControl.control.valid && this.formControl.touched;
	}

	@HostBinding('class.is-invalid')
	get StatusInvalid() {
		if (this.formControl.control == null) {
			return false;
		}
		return this.formControl.control.invalid && this.formControl.touched;
	}
}
