import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.interface';

export const CATEGORIES_API_URL = 'http://localhost:3003/api/categories';

@Injectable()
export class CategoriesService {
  private readonly http = inject(HttpClient);

  getAll(count: number): Observable<Category[]> {
    return this.http.get<Category[]>(CATEGORIES_API_URL + '/' + count);
  }
}
