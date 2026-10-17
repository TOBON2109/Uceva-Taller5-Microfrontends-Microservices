import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../models/supplier.interface';

export const SUPPLIERS_API_URL = 'http://localhost:3004/api/suppliers';

@Injectable()
export class SuppliersService {
  private readonly http = inject(HttpClient);

  getAll(count: number): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(SUPPLIERS_API_URL + '/' + count);
  }
}
