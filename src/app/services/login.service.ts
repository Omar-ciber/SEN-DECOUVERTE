import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/login';
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient) {}

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap((response) => {
          this.handleSuccess('Login successful');
          this.loggedIn.next(true);
        }),
        catchError((error) => {
          this.handleError('Login failed', error);
          throw error;
        })
      );
  }

  logout() {
    this.loggedIn.next(false);
    // Autres opérations pour déconnexion
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user)
      .pipe(
        tap((response) => {
          this.handleSuccess('Registration successful');
          this.loggedIn.next(true);
        }),
        catchError((error) => {
          this.handleError('Registration failed', error);
          throw error;
        })
      );
  }

  private handleSuccess(message: string): void {
    Swal.fire('Success', message, 'success');
  }

  private handleError(action: string, error: any): void {
    Swal.fire({
      icon: 'error',
      title: `${action} Error`,
      text: error.message || 'An error occurred',
    });
  }
}
