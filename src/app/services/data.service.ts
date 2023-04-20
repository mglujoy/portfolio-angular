import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SecurityService } from './security.service';
import { Observable, ObservedValueOf } from 'rxjs';
import { Education } from '../models/education';
import { Work } from '../models/work';
import { Skills } from '../models/skills';
import { Home } from '../models/home';
import { About } from '../models/about';
import { Reach } from '../models/reach';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
    private securityService: SecurityService
  ) { }

  get<T>(url: string, httpParams?: any): Observable<HttpResponse<T>> {
    const httpHeaders: HttpHeaders = this. getHeaders();

    return this.http.get<T>(url,
      {
        headers: httpHeaders,
        params: httpParams,
        observe: 'response'
      });
  }

  post<T>(url: string, data: any): Observable<HttpResponse<T>> {
    const httpHeaders: HttpHeaders = this.getHeaders();

    return this.http.post<T>(url, data,
      {
        headers: httpHeaders,
        observe: 'response'
      });
  }

  put<T>(url: string, data: any): Observable<HttpResponse<T>> {
    const httpHeaders: HttpHeaders = this.getHeaders();

    return this.http.put<T>(url, data,
      {
        headers: httpHeaders,
        observe: 'response'
      });
  }

  delete<T>(url: string, params?: any): Observable<HttpResponse<T>> {
    const httpHeaders: HttpHeaders = this.getHeaders();

    return this.http.delete<T>(url,
      {
        headers: httpHeaders,
        observe: 'response'
      });
  }

  getHeaders(): HttpHeaders {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    const token = this.securityService.GetToken()
    if(token) {
      httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token)
    }
    return httpHeaders;
  }
  
  private crudUrl = 'http://localhost:8081/api/v1/education';
  saveEducation(education: Education) : Observable<Object> {
    return this.http.post(this.crudUrl, education);
  }
  getEducation(id: number, education: Education) : Observable<Object> {
    return this.http.get<Education>(`${this.crudUrl}/${id}`);
  }
  putEducation(id: number, education: Education) : Observable<Object> {
    return this.http.put<Education>(`${this.crudUrl}/${id}`, education);
  }
  deleteEducation(id: number) : Observable<Object> {
    return this.http.delete<Education>(`${this.crudUrl}/${id}`);
  }  

  private crudUrlW = 'http://localhost:8081/api/v1/work';
  saveWork(work: Work) : Observable<Object> {
    return this.http.post(this.crudUrlW, work);
  }
  deleteWork(id: number) : Observable<Object>{
    return this.http.delete<Work>(`${this.crudUrlW}/${id}`);
  }
  getWork(id: number, work: Work) : Observable<Object> {
    return this.http.get<Work>(`${this.crudUrlW}/${id}`);
  }
  putWork(id: number, work: Work) : Observable<Object> {
    return this.http.put<Work>(`${this.crudUrlW}/${id}`, work);
  }

  private crudUrlS = 'http://localhost:8081/api/v1/skills';
  saveSkills(skills: Skills) : Observable<Object> {
    return this.http.post(this.crudUrlS, skills);
  }
  deleteSkill(id: number) : Observable<Object>{
    return this.http.delete<Skills>(`${this.crudUrlS}/${id}`);
  }
  getSkills(id: number, skills: Skills) : Observable<Object> {
    return this.http.get<Skills>(`${this.crudUrlS}/${id}`);
  }
  putSkills(id: number, skills: Skills) : Observable<Object> {
    return this.http.put<Skills>(`${this.crudUrlS}/${id}`, skills);
  }
  private crudUrlH = 'http://localhost:8081/api/v1/home';
  getHome(id: number, home: Home) : Observable<Object> {
    return this.http.get<Home>(`${this.crudUrlH}/${id}`);
  }
  putHome(id: number, home: Home) : Observable<Object> {
    return this.http.put<Home>(`${this.crudUrlH}/${id}`, home);
  }
  private crudUrlA = 'http://localhost:8081/api/v1/about';
  getAbout(id: number, about: About) : Observable<Object> {
    return this.http.get<About>(`${this.crudUrlA}/${id}`);
  }
  putAbout(id: number, about: About) : Observable<Object> {
    return this.http.put<About>(`${this.crudUrlA}/${id}`, about);
  }
  private crudUrlR = 'http://localhost:8081/api/v1/reach';
  saveReach(reach: Reach) : Observable<Object> {
    return this.http.post(this.crudUrlR, reach);
  }
 }
