import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddGuideService {

  constructor(private http: HttpClient) { }
  // lister les guide
  getAllGuide(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/listerGuide`,{});
  }

  // Méthode pour ajouter un guide
  postGuide(guide: any): Observable<any> {
    return this.http.post<any>(`${baseUrl}/create-guide`, guide);
  }

deleteGuide(guideId: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete-guide/${guideId}`);
  }
  guideParZone(ZoneId: any): Observable<any> {
    return this.http.get<any>(`${baseUrl}/listerGuidesParZone/${ZoneId}`,{});
 } 
}
