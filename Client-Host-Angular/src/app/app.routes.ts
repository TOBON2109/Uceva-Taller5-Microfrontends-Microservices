import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 */
export const routes: Routes = [

  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `UsersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  {
    path: 'users',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './UsersPage',
      }).then(m => m.UsersPage),
  },

  /**
   * Ruta de productos.
   *
   * @remarks
   * Renderiza el componente `ProductsPage`, encargado
   * de mostrar y gestionar el listado de productos.
   */
  {
    path: 'products',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './ProductsPage',
      }).then(m => m.ProductsPage),
  },

  /**
   * Ruta de categorías.
   *
   * @remarks
   * Carga las rutas expuestas por el microfrontend de categorías,
   * que consume `Microservice-Categories-NodeJS`.
   */
  {
    path: 'categories',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        exposedModule: './Routes',
      }).then(m => m.routes),
  },

  /**
   * Ruta de proveedores.
   *
   * @remarks
   * Carga las rutas expuestas por el microfrontend de proveedores,
   * que consume `Microservice-Suppliers-NodeJS`.
   */
  {
    path: 'suppliers',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4204/remoteEntry.js',
        exposedModule: './Routes',
      }).then(m => m.routes),
  },

  /**
   * Ruta de pedidos.
   *
   * @remarks
   * Carga las rutas expuestas por el microfrontend de pedidos,
   * que consume `Microservice-Orders-NodeJS`.
   */
  {
    path: 'orders',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4205/remoteEntry.js',
        exposedModule: './Routes',
      }).then(m => m.routes),
  },

  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: '**', redirectTo: 'users' },
];