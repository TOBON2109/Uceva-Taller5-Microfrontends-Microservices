import app from './app.js';

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
  console.log('Microservicio de Proveedores en http://localhost:' + PORT);
  console.log('Swagger: http://localhost:' + PORT + '/api/docs');
});
