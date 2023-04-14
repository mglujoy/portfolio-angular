import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Subscription } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  IsAuthenticated = false;
  private subsAuth$: Subscription;
  aboutInfo:any; 
  saveData: any;
  constructor (
    private getData:PortfolioService,
    private securityService: SecurityService) {
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
    });
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

  
}
