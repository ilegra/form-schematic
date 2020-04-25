import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { SectionComponent } from './components/section/section.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputRefDirective } from './components/custom-input/input-ref.directive';

@NgModule({
	declarations: [
		CustomInputComponent,
		SectionComponent,
		InputRefDirective,
		HeaderComponent
	],
	imports: [CommonModule, ReactiveFormsModule, FormsModule],
	exports: [
		CustomInputComponent,
		SectionComponent,
		HeaderComponent,
		InputRefDirective
	]
})
export class SharedModule {}
