import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../models/category.interface';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories-page',
  imports: [FormsModule],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.scss',
})
export class CategoriesPageComponent implements OnInit {
  private readonly service = inject(CategoriesService);

  count = 10;
  items = signal<Category[]>([]);
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
