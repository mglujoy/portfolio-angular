import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Education } from 'src/app/models/education';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-resume-update',
  templateUrl: './resume-update.component.html',
  styleUrls: ['./resume-update.component.css']
})
export class ResumeUpdateComponent {
  subRef$: Subscription | undefined;

  education: Education = new Education();
  
  constructor(private dataService: DataService, private router:Router) {
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
