import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service';
import { Education } from 'src/app/models/education';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, OnDestroy {
  subRef$: Subscription | undefined;
  education: Education[] | undefined;
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
      {
        console.log(data);
        this.getEducation();
      })
  }
}
