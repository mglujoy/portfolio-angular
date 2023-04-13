import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ReachComponent } from './reach/reach.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: "full"  
  }, 
  {
    path: 'home',
    component: HomeComponent,  
  },
  {
    path: 'about',
    component: AboutComponent,  
  },
  {
    path: 'resume',
    component: ResumeComponent,  
  }, 
  {
    path: 'reach',
    component: ReachComponent,  
  },
  {
    path: 'login',
    component: LoginComponent,  
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,  
  }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
