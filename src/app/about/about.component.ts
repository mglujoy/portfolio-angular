import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  aboutInfo:any; 
  constructor (private getData:PortfolioService) {}

  ngOnInit(): void {
    this.getData.getAboutInfo().subscribe(data => {
      console.log(data)
      this.aboutInfo=data;
    });
  }
  onEdit(item:any)  {
	  item.isEdit = true;
}
}
