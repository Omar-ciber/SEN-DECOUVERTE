import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private apiUrl = 'http://127.0.0.1:8000/api/login';
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient) {}

  loginUser(user: any) : Observable<any> {
    return this.http.post<any>(`http://127.0.0.1:8000/api/login`, user)
  }


}
