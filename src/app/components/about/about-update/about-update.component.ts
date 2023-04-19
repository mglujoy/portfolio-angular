import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { About } from 'src/app/models/about';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about-update',
  templateUrl: './about-update.component.html',
  styleUrls: ['./about-update.component.css']
})
export class AboutUpdateComponent implements OnInit {

  subRef$: Subscription;
  id: number;
  about: About = new About();
  
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService, 
    private router:Router) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.about = new About();
    this.dataService.getAbout(this.id, this.about).subscribe((data: any) => this.about = data);
    
  }

  updateAbout() {
    this.dataService.putAbout(this.about.id, this.about).subscribe(data =>{
      console.log(data);
      this.goToAbout();
    }, error => console.log(error));
  }
  
    goToAbout() {
      this.router.navigate(['/about']);
    }
  
    onSubmit(){
      this.updateAbout();
    }

}
