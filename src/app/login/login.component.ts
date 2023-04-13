import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Ilogin } from '../models/ilogin';
import { IResponse } from '../models/iresponse';
import { Subscription } from 'rxjs';

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
    private http: HttpClient,
    private router: Router
    ) {
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

    this.subRef$ = this.http.post<IResponse>(
      'http://localhost:8080/api/v1/auth/authenticate', 
      userLogin, { observe: 'response'})
      .subscribe((res: any) => {
        const token = res.body.response;
        console.log('token', token);
        sessionStorage.setItem('token', token);
        this.router.navigate(['/home'])
      }, err => {
        console.log('Login Error', err)
      });

  }
}
