import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { InputRefDirective } from './custom-input.directive';

@Component({
	selector: 'app-custom-input',
	templateUrl: './custom-input.component.html',
	styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {
	@Input() label: string;
	@Input() validations: { [index: string]: string };
	@Input() info: string;

	@ContentChild(InputRefDirective, { static: true })
	input: InputRefDirective;

	ngOnInit() {
		console.log(this.input);
	}
	get isError() {
		return this.input.hasError;
	}

	get isRequired() {
		return this.input.isRequired;
	}

	get isDisabled() {
		return this.input.isDisabled;
	}

	get errorMessages() {
		if (!this.validations) {
			return '';
		}
		const { errors } = this.input;
		const messages = [];
		const keys = Object.keys(this.validations);

		keys.forEach(key => {
			if (errors[key]) {
				messages.push(this.validations[key]);
			}
		});
		return messages;
	}
}
