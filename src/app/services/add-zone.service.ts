// zone.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from './url';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  // private apiUrl = 'http://127.0.0.1:8000/api/ajoutZone';

  constructor(private http: HttpClient) { }
// lister les zones
  getAllZones(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/listeZone`);
  }

  // Méthode pour ajouter un zone
  postZone(zone: any): Observable<any> {
    return this.http.post<any>(`${baseUrl}/ajoutZone`, zone);
  }

  // Méthode pour supprimer un zone
  deleteZone(zoneId: any): Observable<any> {
    return this.http.delete(`${baseUrl}/supprimerZone/${zoneId}`);
  }
  publierZone(zoneId: any): Observable<any> {
     return this.http.get(`${baseUrl}/publierZone/${zoneId}`);
}
}




