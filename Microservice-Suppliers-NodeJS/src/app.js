import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './config/swagger.js';
import suppliersRoutes from './routes/suppliers.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/suppliers', suppliersRoutes);

export default app;
