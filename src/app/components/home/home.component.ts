import { Component, OnDestroy, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Home } from 'src/app/models/home';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  homeInfo:any; 
  subRef$: Subscription;
  home: Home[];
  IsAuthenticated = false;
  private subsAuth$: Subscription;

  constructor (
    private getData:PortfolioService,
    private dataService: DataService,
    private securityService: SecurityService,
    private router: Router
    ) {
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
    this.getHome();

    this.getData.getHomeInfo().subscribe(data => {
      console.log(data)
      this.homeInfo=data;
    });
  }
  private getHome() {
    const url = 'http://localhost:8081/api/v1/home';
    this.subRef$ = this.dataService.get<Home[]>(
      url).subscribe((res: any) => {
      this.home = res.body;
    }, err => {
      console.log("Error", err);
    }); 
  }
  updateHome(id: number) {
    this.router.navigate(['home-update', id]);
  }
}
