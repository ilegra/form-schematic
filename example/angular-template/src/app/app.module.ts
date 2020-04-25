import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { PersonalInformationFormComponent } from './personal-information/personal-information-form.component';

@NgModule({
	declarations: [AppComponent, PersonalInformationFormComponent],
	imports: [BrowserModule, SharedModule, ReactiveFormsModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
