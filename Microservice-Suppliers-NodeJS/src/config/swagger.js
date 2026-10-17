const schema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    company: { type: 'string' },
    email: { type: 'string' },
    phone: { type: 'string' },
    city: { type: 'string' },
  },
};

export default {
  openapi: '3.0.0',
  info: {
    title: 'Microservicio de Proveedores',
    version: '1.0.0',
    description: 'API de Proveedores con datos simulados generados con Faker.js',
  },
  servers: [{ url: 'http://localhost:3004' }],
  paths: {
    '/api/suppliers/{count}': {
      get: {
        summary: 'Generar proveedores simulados',
        parameters: [
          { name: 'count', in: 'path', required: true, schema: { type: 'integer', minimum: 1, maximum: 100, example: 10 } },
        ],
        responses: {
          200: {
            description: 'Lista de proveedores',
            content: { 'application/json': { schema: { type: 'array', items: schema } } },
          },
          400: { description: 'Cantidad inválida' },
        },
      },
    },
  },
};
