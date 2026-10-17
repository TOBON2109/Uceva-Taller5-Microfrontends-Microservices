import { provideHttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import { CategoriesPageComponent } from './pages/categories-page.component';
import { CategoriesService } from './services/categories.service';

export const routes: Routes = [
  {
    path: '',
    component: CategoriesPageComponent,
    providers: [provideHttpClient(), CategoriesService],
  },
];
