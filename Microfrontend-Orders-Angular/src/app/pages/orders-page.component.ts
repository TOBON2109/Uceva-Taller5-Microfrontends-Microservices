import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from '../models/order.interface';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders-page',
  imports: [FormsModule],
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.scss',
})
export class OrdersPageComponent implements OnInit {
  private readonly service = inject(OrdersService);

  count = 10;
  items = signal<Order[]>([]);
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
