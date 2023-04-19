import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ReachComponent } from './components/reach/reach.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    ReachComponent,
    LoginComponent,
    PortfolioComponent,
    ResumeAddComponent,
    ResumeUpdateComponent,
    ResumeAddWorkComponent,
    ResumeAddSkillsComponent,
    WelcomeComponent,
    ResumeUpdateWorkComponent,
    ResumeUpdateSkillsComponent,
    HomeUpdateComponent,
    AboutUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
