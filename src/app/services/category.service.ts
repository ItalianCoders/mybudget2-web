import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.baseUrl}/categories`);
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${environment.baseUrl}/categories/${id}`);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${environment.baseUrl}/categories`, category);
  }

  editCategory(id: number, category: Category) {
    const request = {
      name: category.name,
      description: category.description
    };

    return this.http.put(`${environment.baseUrl}/categories/${id}`, request);
  }

  deleteCategory(id: number) {
    return this.http.delete(`${environment.baseUrl}/categories/${id}`);
  }
}
