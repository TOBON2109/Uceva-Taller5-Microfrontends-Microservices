# Proveedores - Microservicio (Node.js)

- Microservicio desarrollado con Node.js y Express que genera datos simulados con Faker.js.
- Es consumido por `Microfrontend-Suppliers-Angular`.

## 🏗️ Estructura

```
src
├── config/swagger.js
├── controllers/suppliers.controller.js
├── routes/suppliers.routes.js
├── services/suppliers.service.js
├── app.js
└── server.js
```

## 📦 Modelo

| Campo | Tipo |
| --- | --- |
| id | number |
| company | string |
| email | string |
| phone | string |
| city | string |

## 🚀 Ejecución

1. Instalar dependencias: `npm i`
2. Ejecutar: `npm run start`
3. Verificar:
   - Corriendo en: `http://localhost:3004`
   - Swagger API Docs: `http://localhost:3004/api/docs`
   - API: `http://localhost:3004/api/suppliers/{count}` (cantidad entre 1 y 100)
