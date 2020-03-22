import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request';
import { Session } from '../models/session';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  user: Session;

  constructor(private http: HttpClient, private router: Router) { }

  login(request: LoginRequest): void {
    this.http.post<Session>(`${environment.baseUrlPublic}/session`, request).subscribe(
      (response: Session) => {
        console.log('Response', response);
        this.user = response;
        this.router.navigate(['dashboard']);
      },
      error => console.error('Error', error)
    );
  }

  isAuthenticated(): boolean {
    if (this.user) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
