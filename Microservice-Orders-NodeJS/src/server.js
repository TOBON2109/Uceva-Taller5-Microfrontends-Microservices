import app from './app.js';

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log('Microservicio de Pedidos en http://localhost:' + PORT);
  console.log('Swagger: http://localhost:' + PORT + '/api/docs');
});
