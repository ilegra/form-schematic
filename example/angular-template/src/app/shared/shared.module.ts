import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './components/section/section.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		SectionComponent,
		HeaderComponent
	],
	imports: [CommonModule, ReactiveFormsModule, FormsModule],
	exports: [
		SectionComponent,
		HeaderComponent,
	]
})
export class SharedModule {}
