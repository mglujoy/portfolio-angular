import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ilogin } from '../../models/ilogin';
import { IResponse } from '../../models/iresponse';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin: FormGroup;
  subRef$: Subscription | undefined;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private dataService: DataService,
    private securityService: SecurityService
    ) {
    
    this.securityService.LogOff();

    this.formLogin = this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(6)]],        
      }
    )
  }
  ngOnDestroy(): void {
    if (this.subRef$) {
      this.subRef$.unsubscribe();
    }
  }

  ngOnInit(): void {}

  get Email() {
    return this.formLogin.get("email");
  }
  get Password() {
    return this.formLogin.get("password");
  }

  Login() {

    const userLogin: Ilogin = {
      email: this.formLogin.value.email,
      password: this.formLogin.value.password,
    };
    const url = 'http://localhost:8080/api/v1/auth/authenticate' ;
    this.subRef$ = this.dataService.post<IResponse>(
      url, 
      userLogin)
      .subscribe((res: any) => {
        const token = res.body.response;
        console.log('token', token);
        this.securityService.SetAuthData(token);
        this.router.navigate(['/home'])
      }, err => {
        console.log('Login Error', err);
        alert("Invalid Credentials");
      });

  }
}
