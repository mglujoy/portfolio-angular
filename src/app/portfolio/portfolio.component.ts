import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../models/iuser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {

  user: IUser | undefined;
  subRef$: Subscription | undefined;

  constructor(
    private http: HttpClient) {}
  ngOnDestroy(): void {
    if (this.subRef$) {
      this.subRef$.unsubscribe();
    }
  }
  ngOnInit(): void {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    const token = sessionStorage.getItem('token');
    console.log('get token', token);

    httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);

    this.subRef$ = this.http.get<IUser>(
      'http://localhost:8080/api/v1/demo-controller',
      {
        headers: httpHeaders,
        observe: 'response'
      }
    ).subscribe((res: any) => {
      this.user = res.body;
    }, err => {
      console.log("Error", err);
    }    
    )
  }

}
