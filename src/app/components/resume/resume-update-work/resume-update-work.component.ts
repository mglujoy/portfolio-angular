import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Work } from 'src/app/models/work';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-resume-update-work',
  templateUrl: './resume-update-work.component.html',
  styleUrls: ['./resume-update-work.component.css']
})
export class ResumeUpdateWorkComponent implements OnInit {

  subRef$: Subscription;
  id: number;
  work: Work = new Work();
  
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService, 
    private router:Router) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.work = new Work();
    this.dataService.getWork(this.id, this.work).subscribe((data: any) => this.work = data);
    
  }

  updateWork() {
    this.dataService.putWork(this.work.id, this.work).subscribe(data =>{
      console.log(data);
      this.goToResume();
    }, error => console.log(error));
  }
  
    goToResume() {
      this.router.navigate(['/resume']);
    }
  
    onSubmit(){
      this.updateWork();
    }

}
