import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { SectionComponent } from './components/section/section.component';
import { InputRefDirective } from './components/custom-input/custom-input.directive';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
