# Pedidos - Microservicio (Node.js)

- Microservicio desarrollado con Node.js y Express que genera datos simulados con Faker.js.
- Es consumido por `Microfrontend-Orders-Angular`.

## 🏗️ Estructura

```
src
├── config/swagger.js
├── controllers/orders.controller.js
├── routes/orders.routes.js
├── services/orders.service.js
├── app.js
└── server.js
```

## 📦 Modelo

| Campo | Tipo |
| --- | --- |
| id | number |
| customer | string |
| product | string |
| quantity | number |
| total | number |

## 🚀 Ejecución

1. Instalar dependencias: `npm i`
2. Ejecutar: `npm run start`
3. Verificar:
   - Corriendo en: `http://localhost:3005`
   - Swagger API Docs: `http://localhost:3005/api/docs`
   - API: `http://localhost:3005/api/orders/{count}` (cantidad entre 1 y 100)
