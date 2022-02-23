import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
	AppRoutingModule,
	ReactiveFormsModule
  ]
})
export class ContentModule { }
