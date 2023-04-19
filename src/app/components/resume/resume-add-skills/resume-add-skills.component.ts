import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Skills } from 'src/app/models/skills';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-resume-add-skills',
  templateUrl: './resume-add-skills.component.html',
  styleUrls: ['./resume-add-skills.component.css']
})
export class ResumeAddSkillsComponent implements OnInit {

  subRef$: Subscription;
  skills: Skills = new Skills();
  constructor(private dataService: DataService, private router:Router) {}

  ngOnInit(): void {
  }

  saveSkills() {
    this.dataService.saveSkills(this.skills).subscribe(data =>{
      console.log(data);
      this.goToResume();
    }, error => console.log(error));
  }
  
    goToResume() {
      this.router.navigate(['/resume']);
    }
  
    onSubmit(){
      this.saveSkills();
    }  
}
