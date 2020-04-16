import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MovementListPage } from '../models/movement-list-page';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  constructor(private http: HttpClient) { }

  getMovements(): Observable<MovementListPage> {
    return this.http.get<MovementListPage>(`${environment.baseUrl}/movements`);
  }
}
