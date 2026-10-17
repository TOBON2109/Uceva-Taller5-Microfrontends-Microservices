import { provideHttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import { OrdersPageComponent } from './pages/orders-page.component';
import { OrdersService } from './services/orders.service';

export const routes: Routes = [
  {
    path: '',
    component: OrdersPageComponent,
    providers: [provideHttpClient(), OrdersService],
  },
];
