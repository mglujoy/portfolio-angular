import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  aboutInfo:any; 
  saveData: any;
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
  update(item:'') {
    this.saveData.saveAboutInfo().subscribe((data: any) => {
      console.log(data)
      this.saveData=data
    })
  }
}
