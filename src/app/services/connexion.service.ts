import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private http: HttpClient) { }
  loginUser(user: any) : Observable<any> {
    return this.http.post<any>(`http://127.0.0.1:8000/api/login`, user)
  }
  loginGuide(user: any) : Observable<any> {
    return this.http.post<any>(`http://127.0.0.1:8000/api/login/guide`, user)
  }

  registerUser(user: any) : Observable<any> {
    return this.http.post<any>(`http://127.0.0.1:8000/api/register`, user)
  }

}
