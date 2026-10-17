import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Order } from '../models/order.interface';
import { ORDERS_API_URL, OrdersService } from './orders.service';

describe('OrdersService', () => {
  const items: Order[] = [{ id: 1, customer: "texto customer", product: "texto product", quantity: 10, total: 10 }];
  let service: OrdersService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(OrdersService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('debe consultar al microservicio la cantidad solicitada', () => {
    let result: Order[] = [];
    service.getAll(5).subscribe((data) => (result = data));

    const req = http.expectOne(ORDERS_API_URL + '/5');
    expect(req.request.method).toBe('GET');
    req.flush(items);

    expect(result).toEqual(items);
  });
});
