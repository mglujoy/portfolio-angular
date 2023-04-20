import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Reach } from 'src/app/models/reach';
import { DataService } from 'src/app/services/data.service';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-reach',
  templateUrl: './reach.component.html',
  styleUrls: ['./reach.component.css']
})
export class ReachComponent implements OnInit, OnDestroy {
  IsAuthenticated = false;
  private subsAuth$: Subscription;
  subRef$: Subscription;
  reach: Reach[];
  newMessage = new Reach();
  constructor (
    private securityService: SecurityService,
    private dataService: DataService,
    private router: Router
    ) {
      this.IsAuthenticated = this.securityService.IsAuthorized;

      this.subsAuth$ = this.securityService.authChallenge$.subscribe(
        (isAuth)=> {
          this.IsAuthenticated = isAuth;
        });
    }
  ngOnDestroy(): void {
    if (this.subRef$) {
      this.subRef$.unsubscribe();
   }}

  ngOnInit(): void {
    this.getReach();
    };

  private getReach() {
    const url = 'http://localhost:8081/api/v1/reach';
    this.subRef$ = this.dataService.get<Reach[]>(
      url).subscribe((res: any) => {
      this.reach = res.body;
    }, err => {
      console.log("Error", err);
    }); 
  }
  saveReach() {
    this.dataService.saveReach(this.newMessage).subscribe(data =>{
      console.log(data);
      this.goToReach();
    }, error => console.log(error));
  }
  goToReach() {
    this.router.navigate(['/']);
  }

  onSubmit(){
    this.saveReach();
  }
}
