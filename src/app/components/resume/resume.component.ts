import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service';
import { Education } from 'src/app/models/education';
import { Router } from '@angular/router';
import { IEducation } from 'src/app/models/ieducation';
import { Work } from 'src/app/models/work';
import { Skills } from 'src/app/models/skills';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, OnDestroy {
  subRef$: Subscription;
  education: Education[];
  ieducation: IEducation;
  work: Work[];
  skills: Skills[];
  IsAuthenticated = false;
  private subsAuth$: Subscription;
  
  constructor (
    private dataService: DataService,
    private securityService: SecurityService,
    private router: Router) {
      this.IsAuthenticated = this.securityService.IsAuthorized;

      this.subsAuth$ = this.securityService.authChallenge$.subscribe(
        (isAuth)=> {
          this.IsAuthenticated = isAuth;
        });
    }

  ngOnDestroy(): void {
    if (this.subRef$) {
      this.subRef$.unsubscribe();
   }
  }

  ngOnInit(): void { 
    this.getEducation();
    this.getWork();
    this.getSkills();
  }

  private getEducation() {
    const url = 'http://localhost:8081/api/v1/education';
    this.subRef$ = this.dataService.get<Education[]>(
      url).subscribe((res: any) => {
      this.education = res.body;
    }, err => {
      console.log("Error", err);
    }); 
  }

  updateEducation(id: number) {
    this.router.navigate(['resume-update', id]);
  }
  deleteEducation(id: number) {
    this.dataService.deleteEducation(id).subscribe(data =>
      {this.getEducation();
        console.log(data);
      }, err => {
        console.log("Error", err);
      });
  }

  private getWork() {
    const url = 'http://localhost:8081/api/v1/work';
    this.subRef$ = this.dataService.get<Work[]>(
      url).subscribe((res: any) => {
      this.work = res.body;
    }, err => {
      console.log("Error", err);
    }); 
  }
  deleteWork(id: number) {
    this.dataService.deleteWork(id).subscribe(data =>
      {this.getEducation();
        console.log(data);
      }, err => {
        console.log("Error", err);
      });
  }

  private getSkills() {
    const url = 'http://localhost:8081/api/v1/skills';
    this.subRef$ = this.dataService.get<Skills[]>(
      url).subscribe((res: any) => {
      this.skills = res.body;
    }, err => {
      console.log("Error", err);
    }); 
  }  
  deleteSkill(id: number) {
    this.dataService.deleteSkill(id).subscribe(data =>
      {this.getEducation();
        console.log(data);
      }, err => {
        console.log("Error", err);
      });
  }
}
