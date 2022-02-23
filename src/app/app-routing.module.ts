import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './content/contact/contact.component';
import { HomeComponent } from './content/home/home.component';
import { PortfolioComponent } from './content/portfolio/portfolio.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
