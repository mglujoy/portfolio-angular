import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeInfo:any; 
  constructor (private getData:PortfolioService) {}

  ngOnInit(): void {
    this.getData.getHomeInfo().subscribe(data => {
      console.log(data)
      this.homeInfo=data;
    });
  }
}
