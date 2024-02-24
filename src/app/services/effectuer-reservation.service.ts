import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './url';
import { Observable, catchError, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EffectuerReservationService {
  alertMessage(arg0: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  /**fonction lister reservation pour admin */
  getAllReservations(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/reservations`);
    }
  /**fonction lister reservation pour guides */
    getReservationsByGuide(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/listerReservationsParGuide`, {});
    }

   /**fonction lister reservation pour admin */
    getReservationsByAdmin(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/listerReservationsParGuide`, {});
    }

  // Faire une reservation
//     postreservation(reservation: any): Observable<any> {
//     return this.http.post<any>(`${baseUrl}/Faire-reservations`, reservation);
  // }

  postReservation(reservation: any): Observable<any> {
    console.log("Données d'inscription :", reservation);

    return this.http.post<any>(`${baseUrl}/Faire-reservations`, reservation);
  }
  // pointg pour accepter  une validation
 accepterReservationById(reservationId:any): Observable<any> {
    return this.http.put<any>(`${baseUrl}/reservations/accepter/${reservationId}`, {});
 }
  // statut pour disponibiliter
 getDisponibiliteGuide(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/ChangerStatutGuideEn_Dispo`, {});
 }

  // statut nondisponible
   getIndisponibiliteGuide(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/ChangerStatutGuideEn_Nodispo`, {});
 }

}
