import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './url';
import { Observable, catchError, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EffectuerReservationService {

  constructor(private http: HttpClient) { }
    getAllReservations(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/reservations`);
    }
    getReservationsGuide(id :any): Observable<any> {
    return this.http.get<any>(`${baseUrl}/reservations/${id}`);
    }

  // Faire une reservation
//     postreservation(reservation: any): Observable<any> {
//     return this.http.post<any>(`${baseUrl}/Faire-reservations`, reservation);
  // }

  postReservation(reservation: any): Observable<any> {
    console.log("Données d'inscription :", reservation);

    return this.http.post<any>(`${baseUrl}/Faire-reservations`, reservation);
  }




}
