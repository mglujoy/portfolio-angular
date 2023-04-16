import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ReachComponent } from './components/reach/reach.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeAddComponent } from './components/resume-add/resume-add.component';
import { ResumeUpdateComponent } from './components/resume-update/resume-update.component';


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
  },
  {
    path: 'resume/resume-add',
    component: ResumeAddComponent,
  },
  {
    path: 'resume/resume-update',
    component: ResumeUpdateComponent
  }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
