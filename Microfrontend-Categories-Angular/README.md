# Categorías - Microfrontend (Angular)

- Microfrontend desarrollado con Angular 20.3.14 y Webpack Module Federation, integrado por `Client-Host-Angular`.
- Consume exclusivamente `Microservice-Categories-NodeJS` (`http://localhost:3003/api/categories`).

## 🏗️ Estructura

```
src/app
├── models/category.interface.ts
├── services/categories.service.ts
├── pages/categories-page.component.(ts|html|scss)
├── app.routes.ts
└── app.ts
```

## 🔌 Integración

| Dato | Valor |
| --- | --- |
| Nombre del remote | `mf-categories` |
| Puerto | `4203` |
| Remote entry | `http://localhost:4203/remoteEntry.js` |
| Módulo expuesto | `./Routes` |
| Microservicio | `Microservice-Categories-NodeJS` (puerto 3003) |

## 🚀 Ejecución

1. Instalar dependencias: `npm i`
2. Ejecutar: `npm start`
3. Verificar: `http://localhost:4203` y `http://localhost:4203/remoteEntry.js`

## 🧪 Pruebas Unitarias

- `npm test -- --no-watch --code-coverage --browsers=ChromeHeadless`

## 📚 Documentación Técnica (Compodoc)

- Generar: `npm run compodoc`
- Ver: `npx compodoc -s -d documentation` y abrir `http://localhost:8080`
