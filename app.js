import express from 'express';
import swaggerUi from 'swagger-ui-express';
import ExampleRoutes from './example/example.routes.js';

const app = express();

app.use('/weird', ExampleRoutes);

export default app;
