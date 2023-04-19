import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Skills } from 'src/app/models/skills';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-resume-update-skills',
  templateUrl: './resume-update-skills.component.html',
  styleUrls: ['./resume-update-skills.component.css']
})
export class ResumeUpdateSkillsComponent implements OnInit{
  
  subRef$: Subscription;
  id: number;
  skills: Skills = new Skills();
  
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService, 
    private router:Router) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.skills = new Skills();
    this.dataService.getSkills(this.id, this.skills).subscribe((data: any) => this.skills = data);
    
  }

  updateSkills() {
    this.dataService.putSkills(this.skills.id, this.skills).subscribe(data =>{
      console.log(data);
      this.goToResume();
    }, error => console.log(error));
  }
  
    goToResume() {
      this.router.navigate(['/resume']);
    }
  
    onSubmit(){
      this.updateSkills();
    }

}
