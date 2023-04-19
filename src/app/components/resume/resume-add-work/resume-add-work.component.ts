import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Work } from 'src/app/models/work';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-resume-add-work',
  templateUrl: './resume-add-work.component.html',
  styleUrls: ['./resume-add-work.component.css']
})
export class ResumeAddWorkComponent implements OnInit {
  subRef$: Subscription;
  work: Work = new Work();
  constructor(private dataService: DataService, private router:Router) {

  }
  ngOnInit(): void {
  }

  saveWork() {
    this.dataService.saveWork(this.work).subscribe(data =>{
      console.log(data);
      this.goToResume();
    }, error => console.log(error));
  }
  
    goToResume() {
      this.router.navigate(['/resume']);
    }
  
    onSubmit(){
      this.saveWork();
    }  
}
