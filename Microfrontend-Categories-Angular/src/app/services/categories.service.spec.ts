import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Category } from '../models/category.interface';
import { CATEGORIES_API_URL, CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  const items: Category[] = [{ id: 1, name: "texto name", description: "texto description", productsCount: 10 }];
  let service: CategoriesService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(CategoriesService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('debe consultar al microservicio la cantidad solicitada', () => {
    let result: Category[] = [];
    service.getAll(5).subscribe((data) => (result = data));

    const req = http.expectOne(CATEGORIES_API_URL + '/5');
    expect(req.request.method).toBe('GET');
    req.flush(items);

    expect(result).toEqual(items);
  });
});
