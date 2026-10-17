# Pedidos - Microfrontend (Angular)

- Microfrontend desarrollado con Angular 20.3.14 y Webpack Module Federation, integrado por `Client-Host-Angular`.
- Consume exclusivamente `Microservice-Orders-NodeJS` (`http://localhost:3005/api/orders`).

## 🏗️ Estructura

```
src/app
├── models/order.interface.ts
├── services/orders.service.ts
├── pages/orders-page.component.(ts|html|scss)
├── app.routes.ts
└── app.ts
```

## 🔌 Integración

| Dato | Valor |
| --- | --- |
| Nombre del remote | `mf-orders` |
| Puerto | `4205` |
| Remote entry | `http://localhost:4205/remoteEntry.js` |
| Módulo expuesto | `./Routes` |
| Microservicio | `Microservice-Orders-NodeJS` (puerto 3005) |

## 🚀 Ejecución

1. Instalar dependencias: `npm i`
2. Ejecutar: `npm start`
3. Verificar: `http://localhost:4205` y `http://localhost:4205/remoteEntry.js`

## 🧪 Pruebas Unitarias

- `npm test -- --no-watch --code-coverage --browsers=ChromeHeadless`

## 📚 Documentación Técnica (Compodoc)

- Generar: `npm run compodoc`
- Ver: `npx compodoc -s -d documentation` y abrir `http://localhost:8080`
