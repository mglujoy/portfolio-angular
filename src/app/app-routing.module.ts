import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ReachComponent } from './components/reach/reach.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeAddComponent } from './components/resume/resume-add/resume-add.component';
import { ResumeUpdateComponent } from './components/resume/resume-update/resume-update.component';
import { ResumeAddWorkComponent } from './components/resume/resume-add-work/resume-add-work.component';
import { ResumeAddSkillsComponent } from './components/resume/resume-add-skills/resume-add-skills.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ResumeUpdateWorkComponent } from './components/resume/resume-update-work/resume-update-work.component';
import { ResumeUpdateSkillsComponent } from './components/resume/resume-update-skills/resume-update-skills.component';
import { HomeUpdateComponent } from './components/home/home-update/home-update.component';
import { AboutUpdateComponent } from './components/about/about-update/about-update.component';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  }, 
  {
    path: '',
    component: WelcomeComponent,
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
    path: 'resume-update/:id',
    component: ResumeUpdateComponent
  },
  {
    path: 'resume-update-work/:id',
    component: ResumeUpdateWorkComponent
  },
  {
    path: 'resume-update-skills/:id',
    component: ResumeUpdateSkillsComponent
  },
  {
    path: 'resume/resume-add-work',
    component: ResumeAddWorkComponent
  },
  {
    path: 'resume/resume-add-skills',
    component: ResumeAddSkillsComponent
  },
  {
    path: 'home-update/:id',
    component: HomeUpdateComponent
  },
  {
    path: 'about-update/:id',
    component: AboutUpdateComponent
  }     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
