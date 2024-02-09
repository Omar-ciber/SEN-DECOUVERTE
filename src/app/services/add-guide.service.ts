import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddGuideService {
  // http: any;

  // constructor(http: HttpClient) { }
  // // lister les guide
  // getAllGuide(): Observable<any> {
  //   return this.http.get<any>(`${baseUrl}/listerGuide`);
  // }

  // // Méthode pour ajouter un guide
  // postGuide(guide: any): Observable<any> {
  //   return this.http.post<any>(`${baseUrl}/Create-guide`, guide);
  // }
}
