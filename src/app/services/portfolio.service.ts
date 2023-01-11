import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  getData (): Observable<any> {
    return this.http.get('../../assets/data/machines.json')
  }
  getHomeInfo (): Observable<any> {
    return this.http.get('../../assets/data/homeInfo.json')
  }
  getAboutInfo (): Observable<any> {
    return this.http.get('../../assets/data/about.json')
  }
}
