import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Home } from 'src/app/models/home';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-update',
  templateUrl: './home-update.component.html',
  styleUrls: ['./home-update.component.css']
})
export class HomeUpdateComponent implements OnInit {
  
  subRef$: Subscription;
  id: number;
  home: Home = new Home();
  
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService, 
    private router:Router) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.home = new Home();
    this.dataService.getHome(this.id, this.home).subscribe((data: any) => this.home = data);
    
  }

  updateHome() {
    this.dataService.putHome(this.home.id, this.home).subscribe(data =>{
      console.log(data);
      this.goToResume();
    }, error => console.log(error));
  }
  
    goToResume() {
      this.router.navigate(['/home']);
    }
  
    onSubmit(){
      this.updateHome();
    }


}
