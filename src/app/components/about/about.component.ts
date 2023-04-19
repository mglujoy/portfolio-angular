import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Subscription } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service';
import { About } from 'src/app/models/about';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit, OnDestroy {
  IsAuthenticated = false;
  private subsAuth$: Subscription;
  subRef$: Subscription;
  about: About[];
  aboutInfo:any; 
  saveData: any;
  constructor (
    private getData:PortfolioService,
    private securityService: SecurityService,
    private dataService: DataService,
    private router: Router
    ) {
      this.IsAuthenticated = this.securityService.IsAuthorized;

      this.subsAuth$ = this.securityService.authChallenge$.subscribe(
        (isAuth)=> {
          this.IsAuthenticated = isAuth;
        });
    }

  ngOnInit(): void {
    this.getData.getAboutInfo().subscribe(data => {
      console.log(data)
      this.aboutInfo=data;
    this.getAbout();
    });
  }
  ngOnDestroy(): void {
    if (this.subRef$) {
      this.subRef$.unsubscribe();
   }
  }
  onEdit(item:any)  {
	  item.isEdit = true;
  }
  update(item:'') {
    this.saveData.saveAboutInfo().subscribe((data: any) => {
      console.log(data)
      this.saveData=data
    })
  }
  private getAbout() {
    const url = 'http://localhost:8081/api/v1/about';
    this.subRef$ = this.dataService.get<About[]>(
      url).subscribe((res: any) => {
      this.about = res.body;
    }, err => {
      console.log("Error", err);
    }); 
  }
  updateAbout(id: number) {
    this.router.navigate(['about-update', id]);
  }
  
}
