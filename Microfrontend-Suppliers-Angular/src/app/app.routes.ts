import { provideHttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import { SuppliersPageComponent } from './pages/suppliers-page.component';
import { SuppliersService } from './services/suppliers.service';

export const routes: Routes = [
  {
    path: '',
    component: SuppliersPageComponent,
    providers: [provideHttpClient(), SuppliersService],
  },
];
