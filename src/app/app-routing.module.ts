import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';



const routes: Routes = [
     {path: "home", component: HomeComponent},
     {path: "head", component: HeadComponent},
    {path: "portfolio", component: PortfolioComponent},
    {path: "about", component: AboutComponent},
    {path: "contact", component: ContactComponent},
    { path: "navbar", component: NavbarComponent},
    {path: "footer", component: FooterComponent},
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
