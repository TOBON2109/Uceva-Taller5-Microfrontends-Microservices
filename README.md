# 🧪 Taller 5: Microfrontends y Microservicios en Angular y Node.js

- Taller de Arquitectura de Software (UCEVA).
- Un host Angular integra cinco microfrontends mediante Webpack Module Federation. Cada microfrontend consume su propio microservicio Node.js, que genera datos simulados con Faker.js y documenta su API con Swagger.
- Los proyectos de Usuarios y Productos vienen del repositorio base. Los de Categorías, Proveedores y Pedidos son los desarrollados en este taller.

## 📦 Estructura y Puertos

| Proyecto | Tecnología | Puerto |
| --- | --- | --- |
| Client-Host-Angular | Angular 20 | 4200 |
| Microfrontend-Users-Angular | Angular 20 | 4201 |
| Microfrontend-Products-Angular | Angular 20 | 4202 |
| Microfrontend-Categories-Angular | Angular 20 | 4203 |
| Microfrontend-Suppliers-Angular | Angular 20 | 4204 |
| Microfrontend-Orders-Angular | Angular 20 | 4205 |
| Microservice-Users-NodeJS | Node.js + Express | 3001 |
| Microservice-Products-NodeJS | Node.js + Express | 3002 |
| Microservice-Categories-NodeJS | Node.js + Express + Faker.js | 3003 |
| Microservice-Suppliers-NodeJS | Node.js + Express + Faker.js | 3004 |
| Microservice-Orders-NodeJS | Node.js + Express + Faker.js | 3005 |

## 🔗 Consumo de Microservicios

| Microfrontend | Microservicio | Endpoint |
| --- | --- | --- |
| Microfrontend-Categories-Angular | Microservice-Categories-NodeJS | `http://localhost:3003/api/categories/{count}` |
| Microfrontend-Suppliers-Angular | Microservice-Suppliers-NodeJS | `http://localhost:3004/api/suppliers/{count}` |
| Microfrontend-Orders-Angular | Microservice-Orders-NodeJS | `http://localhost:3005/api/orders/{count}` |

`{count}` es la cantidad de registros a generar (entero entre 1 y 100).

## 📋 Requisitos Previos

- Node.js 20.19+ (o 22.12+) y npm
- Google Chrome (para las pruebas unitarias)
- Git

## 🚀 Ejecución

### 1️⃣ Instalar Dependencias

Ubícate en la raíz de cada proyecto y ejecuta `npm i`:

- `Client-Host-Angular`
- `Microfrontend-Users-Angular`, `Microfrontend-Products-Angular`, `Microfrontend-Categories-Angular`, `Microfrontend-Suppliers-Angular`, `Microfrontend-Orders-Angular`
- `Microservice-Users-NodeJS`, `Microservice-Products-NodeJS`, `Microservice-Categories-NodeJS`, `Microservice-Suppliers-NodeJS`, `Microservice-Orders-NodeJS`

### 2️⃣ Ejecutar los Proyectos

Cada proyecto se ejecuta en su propia terminal con `npm run start`. Orden recomendado: los 5 microservicios, los 5 microfrontends y, al final, el host.

### 3️⃣ Verificar Funcionamiento

- Aplicación completa (host): `http://localhost:4200`
- Swagger de los microservicios nuevos:
  - `http://localhost:3003/api/docs`
  - `http://localhost:3004/api/docs`
  - `http://localhost:3005/api/docs`
- Remote entries: `http://localhost:4201/remoteEntry.js` ... `http://localhost:4205/remoteEntry.js`
- En la pestaña **Network** del navegador se ve cada microfrontend consumiendo su microservicio.

## 🧪 Pruebas Unitarias

En la raíz de cada microfrontend nuevo:

```
npm test -- --no-watch --code-coverage --browsers=ChromeHeadless
```

La cobertura de los tres microfrontends supera el 90%. El reporte queda en `coverage/`.

## 📚 Documentación Técnica

- **Microfrontends (Compodoc):** `npm run compodoc` y luego `npx compodoc -s -d documentation` (abre `http://localhost:8080`).
- **Microservicios (Swagger):** `/api/docs` en cada microservicio.
- Cada proyecto nuevo incluye su propio `README.md`.

## 📝 Estándar de Commits

Formato `tipo(alcance): descripción`, con los tipos `feat`, `fix`, `refactor`, `docs`, `test` y `chore`.