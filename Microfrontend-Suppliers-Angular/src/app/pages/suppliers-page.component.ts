import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Supplier } from '../models/supplier.interface';
import { SuppliersService } from '../services/suppliers.service';

@Component({
  selector: 'app-suppliers-page',
  imports: [FormsModule],
  templateUrl: './suppliers-page.component.html',
  styleUrl: './suppliers-page.component.scss',
})
export class SuppliersPageComponent implements OnInit {
  private readonly service = inject(SuppliersService);

  count = 10;
  items = signal<Supplier[]>([]);
  loading = signal(false);
  error = signal('');

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set('');
    this.service.getAll(this.count).subscribe({
      next: (data) => {
        this.items.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err?.error?.message ?? 'No se pudo cargar la información');
        this.loading.set(false);
      },
    });
  }
}
