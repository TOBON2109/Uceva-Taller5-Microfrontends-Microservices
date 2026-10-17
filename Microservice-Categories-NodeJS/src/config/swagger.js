const schema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    name: { type: 'string' },
    description: { type: 'string' },
    productsCount: { type: 'number' },
  },
};

export default {
  openapi: '3.0.0',
  info: {
    title: 'Microservicio de Categorías',
    version: '1.0.0',
    description: 'API de Categorías con datos simulados generados con Faker.js',
  },
  servers: [{ url: 'http://localhost:3003' }],
  paths: {
    '/api/categories/{count}': {
      get: {
        summary: 'Generar categorías simulados',
        parameters: [
          { name: 'count', in: 'path', required: true, schema: { type: 'integer', minimum: 1, maximum: 100, example: 10 } },
        ],
        responses: {
          200: {
            description: 'Lista de categorías',
            content: { 'application/json': { schema: { type: 'array', items: schema } } },
          },
          400: { description: 'Cantidad inválida' },
        },
      },
    },
  },
};
