import { TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';
import { Supplier } from '../models/supplier.interface';
import { SuppliersService } from '../services/suppliers.service';
import { SuppliersPageComponent } from './suppliers-page.component';

describe('SuppliersPageComponent', () => {
  const items: Supplier[] = [{ id: 1, company: "texto company", email: "texto email", phone: "texto phone", city: "texto city" }, { id: 2, company: "texto company", email: "texto email", phone: "texto phone", city: "texto city" }];

  function setup(result$: Observable<Supplier[]>) {
    const getAll = jasmine.createSpy('getAll').and.returnValue(result$);
    TestBed.configureTestingModule({
      imports: [SuppliersPageComponent],
      providers: [{ provide: SuppliersService, useValue: { getAll } }],
    });
    const fixture = TestBed.createComponent(SuppliersPageComponent);
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
