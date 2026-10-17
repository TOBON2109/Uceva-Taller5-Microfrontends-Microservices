import { TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';
import { Order } from '../models/order.interface';
import { OrdersService } from '../services/orders.service';
import { OrdersPageComponent } from './orders-page.component';

describe('OrdersPageComponent', () => {
  const items: Order[] = [{ id: 1, customer: "texto customer", product: "texto product", quantity: 10, total: 10 }, { id: 2, customer: "texto customer", product: "texto product", quantity: 10, total: 10 }];

  function setup(result$: Observable<Order[]>) {
    const getAll = jasmine.createSpy('getAll').and.returnValue(result$);
    TestBed.configureTestingModule({
      imports: [OrdersPageComponent],
      providers: [{ provide: OrdersService, useValue: { getAll } }],
    });
    const fixture = TestBed.createComponent(OrdersPageComponent);
    fixture.detectChanges();
    fixture.detectChanges();
    return { fixture, getAll };
  }

  it('debe cargar y mostrar una fila por elemento', () => {
    const { fixture, getAll } = setup(of(items));

    expect(getAll).toHaveBeenCalledWith(10);
    expect(fixture.nativeElement.querySelectorAll('tbody tr').length).toBe(2);
  });

  it('debe mostrar mensaje cuando no hay datos', () => {
    const { fixture } = setup(of([]));

    expect(fixture.nativeElement.textContent).toContain('Sin datos');
  });

  it('debe mostrar el mensaje de error del microservicio', () => {
    const { fixture } = setup(throwError(() => ({ error: { message: 'Cantidad inválida' } })));

    expect(fixture.componentInstance.error()).toBe('Cantidad inválida');
  });

  it('debe mostrar un mensaje genérico si el error no trae mensaje', () => {
    const { fixture } = setup(throwError(() => ({})));

    expect(fixture.componentInstance.error()).toBe('No se pudo cargar la información');
  });

  it('debe volver a cargar con la cantidad indicada', () => {
    const { fixture, getAll } = setup(of(items));

    fixture.componentInstance.count = 3;
    fixture.componentInstance.load();

    expect(getAll).toHaveBeenCalledWith(3);
  });
});
