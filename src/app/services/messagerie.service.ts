import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {

  constructor(private http: HttpClient) { }

    postMessageri(message: any): Observable<any> {
    return this.http.post<any>(`${baseUrl}/EnvoieMessage`, message);
    }
  listerMessage(): Observable<any>{
    return  this.http.get<any>(`${baseUrl}/listeMessage`)
  }
  responsMessage(repons : any): Observable<any>{
    return this.http.get<any>(`${baseUrl}/response`)
  }
}

