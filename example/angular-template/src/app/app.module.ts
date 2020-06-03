import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		SharedModule,
		NgxMaskModule.forRoot({
			validation: true
		}),
		AppRoutingModule,
		HttpClientModule,
		TranslocoRootModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
