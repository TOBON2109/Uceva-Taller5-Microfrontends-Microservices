import app from './app.js';

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log('Microservicio de Categorías en http://localhost:' + PORT);
  console.log('Swagger: http://localhost:' + PORT + '/api/docs');
});
