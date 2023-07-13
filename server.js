import express from 'express';
import ExampleRoutes from './example/example.routes.js';

const app = express();
const port = 3000;

app.use('/weird', ExampleRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
