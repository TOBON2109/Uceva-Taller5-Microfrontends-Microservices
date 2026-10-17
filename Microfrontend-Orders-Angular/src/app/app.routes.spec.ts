import { routes } from './app.routes';
import { OrdersPageComponent } from './pages/orders-page.component';

describe('routes', () => {
  it('debe definir la página principal del microfrontend', () => {
    expect(routes.length).toBe(1);
    expect(routes[0].component).toBe(OrdersPageComponent);
    expect(routes[0].providers?.length).toBe(2);
  });
});
