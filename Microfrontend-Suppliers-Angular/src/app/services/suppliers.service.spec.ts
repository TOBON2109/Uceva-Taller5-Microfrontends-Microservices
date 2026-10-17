import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Supplier } from '../models/supplier.interface';
import { SUPPLIERS_API_URL, SuppliersService } from './suppliers.service';

describe('SuppliersService', () => {
  const items: Supplier[] = [{ id: 1, company: "texto company", email: "texto email", phone: "texto phone", city: "texto city" }];
  let service: SuppliersService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuppliersService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(SuppliersService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('debe consultar al microservicio la cantidad solicitada', () => {
    let result: Supplier[] = [];
    service.getAll(5).subscribe((data) => (result = data));

    const req = http.expectOne(SUPPLIERS_API_URL + '/5');
    expect(req.request.method).toBe('GET');
    req.flush(items);

    expect(result).toEqual(items);
  });
});
