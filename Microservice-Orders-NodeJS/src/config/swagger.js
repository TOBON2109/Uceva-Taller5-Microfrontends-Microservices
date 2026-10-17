const schema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    customer: { type: 'string' },
    product: { type: 'string' },
    quantity: { type: 'number' },
    total: { type: 'number' },
  },
};

export default {
  openapi: '3.0.0',
  info: {
    title: 'Microservicio de Pedidos',
    version: '1.0.0',
    description: 'API de Pedidos con datos simulados generados con Faker.js',
  },
  servers: [{ url: 'http://localhost:3005' }],
  paths: {
    '/api/orders/{count}': {
      get: {
        summary: 'Generar pedidos simulados',
        parameters: [
          { name: 'count', in: 'path', required: true, schema: { type: 'integer', minimum: 1, maximum: 100, example: 10 } },
        ],
        responses: {
          200: {
            description: 'Lista de pedidos',
            content: { 'application/json': { schema: { type: 'array', items: schema } } },
          },
          400: { description: 'Cantidad inválida' },
        },
      },
    },
  },
};
