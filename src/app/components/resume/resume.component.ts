import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  machines:any;
  constructor (private getData:PortfolioService) {}

  ngOnInit(): void {
    this.getData.getData().subscribe(data => {
      console.log(data)
      this.machines=data;
    });
  }

}
