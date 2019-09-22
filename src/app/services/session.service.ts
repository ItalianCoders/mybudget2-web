import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { LoginRequest } from '../models/login-request';
import { Session } from '../models/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  login(request: LoginRequest): Observable<Session> {
    return this.http.post<Session>(environment.baseUrlPublic + 'session', request, this.httpOptions);
  }
}
