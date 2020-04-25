import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		SharedModule,
		NgxMaskModule.forRoot({
			validation: true
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
