import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentModule } from "./content/content.module";




@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ShareModule,
		BrowserAnimationsModule,
		ContentModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
