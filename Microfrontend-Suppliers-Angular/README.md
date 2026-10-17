# Proveedores - Microfrontend (Angular)

- Microfrontend desarrollado con Angular 20.3.14 y Webpack Module Federation, integrado por `Client-Host-Angular`.
- Consume exclusivamente `Microservice-Suppliers-NodeJS` (`http://localhost:3004/api/suppliers`).

## 🏗️ Estructura

```
src/app
├── models/supplier.interface.ts
├── services/suppliers.service.ts
├── pages/suppliers-page.component.(ts|html|scss)
├── app.routes.ts
└── app.ts
```

## 🔌 Integración

| Dato | Valor |
| --- | --- |
| Nombre del remote | `mf-suppliers` |
| Puerto | `4204` |
| Remote entry | `http://localhost:4204/remoteEntry.js` |
| Módulo expuesto | `./Routes` |
| Microservicio | `Microservice-Suppliers-NodeJS` (puerto 3004) |

## 🚀 Ejecución

1. Instalar dependencias: `npm i`
2. Ejecutar: `npm start`
3. Verificar: `http://localhost:4204` y `http://localhost:4204/remoteEntry.js`

## 🧪 Pruebas Unitarias

- `npm test -- --no-watch --code-coverage --browsers=ChromeHeadless`

## 📚 Documentación Técnica (Compodoc)

- Generar: `npm run compodoc`
- Ver: `npx compodoc -s -d documentation` y abrir `http://localhost:8080`
