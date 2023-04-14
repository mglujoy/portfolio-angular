import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../../models/iuser';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {

  user: IUser | undefined;
  subRef$: Subscription | undefined;

  constructor(
    private dataService: DataService) {}
  ngOnDestroy(): void {
    if (this.subRef$) {
      this.subRef$.unsubscribe();
    }
  }
  ngOnInit(): void {
    const url = 'http://localhost:8080/api/v1/demo-controller';
    this.subRef$ = this.dataService.get<IUser>(
      url).subscribe((res: any) => {
      this.user = res.body;
    }, err => {
      console.log("Error", err);
    }    
    )
  }

}
