import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url="http://npinti.ddns.net:9008/api/auth/login";
  currentUserSubject;

  constructor(private http: HttpClient) { 
    console.log("Service Working");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || "()"));
  }

  StartSession(credentials: any):Observable<any> {
    return this.http.post(this.url, credentials).pipe(map(data=> {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }))
  }
}
