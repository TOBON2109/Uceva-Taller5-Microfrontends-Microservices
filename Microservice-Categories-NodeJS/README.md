# Categorías - Microservicio (Node.js)

- Microservicio desarrollado con Node.js y Express que genera datos simulados con Faker.js.
- Es consumido por `Microfrontend-Categories-Angular`.

## 🏗️ Estructura

```
src
├── config/swagger.js
├── controllers/categories.controller.js
├── routes/categories.routes.js
├── services/categories.service.js
├── app.js
└── server.js
```

## 📦 Modelo

| Campo | Tipo |
| --- | --- |
| id | number |
| name | string |
| description | string |
| productsCount | number |

## 🚀 Ejecución

1. Instalar dependencias: `npm i`
2. Ejecutar: `npm run start`
3. Verificar:
   - Corriendo en: `http://localhost:3003`
   - Swagger API Docs: `http://localhost:3003/api/docs`
   - API: `http://localhost:3003/api/categories/{count}` (cantidad entre 1 y 100)
