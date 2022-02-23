import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';



@NgModule({
  declarations: [
    MenuBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
	AppRoutingModule,
	CollapseModule
  ],
  exports: [
	  MenuBarComponent,
	  FooterComponent
  ]
})
export class ShareModule { }
