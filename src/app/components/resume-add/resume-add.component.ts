import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { Subscription } from 'rxjs';
import { Education } from 'src/app/models/education';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-resume-add',
  templateUrl: './resume-add.component.html',
  styleUrls: ['./resume-add.component.css']
})
export class ResumeAddComponent implements OnInit{
  subRef$: Subscription | undefined;

  education: Education = new Education();

  constructor(private dataService: DataService, private router:Router) {

  }

  ngOnInit(): void {
          
  }

saveEducation() {
  this.dataService.saveEducation(this.education).subscribe(data =>{
    console.log(data);
    this.goToResume();
  }, error => console.log(error));
}

  goToResume() {
    this.router.navigate(['/resume']);
  }

  onSubmit(){
    this.saveEducation();
  }

}
