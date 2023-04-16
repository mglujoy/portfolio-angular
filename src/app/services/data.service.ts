import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SecurityService } from './security.service';
import { Observable } from 'rxjs';
import { Education } from '../models/education';

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
    return this.http.get<Education>(`${this.crudUrl}/${id}`);
  }  
}
