import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.interface';

export const ORDERS_API_URL = 'http://localhost:3005/api/orders';

@Injectable()
export class OrdersService {
  private readonly http = inject(HttpClient);

  getAll(count: number): Observable<Order[]> {
    return this.http.get<Order[]>(ORDERS_API_URL + '/' + count);
  }
}
