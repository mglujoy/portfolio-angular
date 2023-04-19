import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Education } from 'src/app/models/education';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-resume-update',
  templateUrl: './resume-update.component.html',
  styleUrls: ['./resume-update.component.css']
})
export class ResumeUpdateComponent implements OnInit {
  subRef$: Subscription | undefined;
  id: number;
  education: Education = new Education();
  
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService, 
    private router:Router) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.education = new Education();
    this.dataService.getEducation(this.id, this.education).subscribe((data: any) => this.education = data);
    
  }

  updateEducation() {
    this.dataService.putEducation(this.education.id, this.education).subscribe(data =>{
      console.log(data);
      this.goToResume();
    }, error => console.log(error));
  }
  
    goToResume() {
      this.router.navigate(['/resume']);
    }
  
    onSubmit(){
      this.updateEducation();
    }
}
