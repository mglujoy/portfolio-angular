import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }


  getHomeInfo (): Observable<any> {
    return this.http.get('../../assets/data/homeInfo.json')
  }
  getAboutInfo (): Observable<any> {
    return this.http.get('../../assets/data/about.json')
  }
  saveAboutInfo (): Observable<any> {
    return this.http.post('../../assets/data/about.json', '')
  }
}
