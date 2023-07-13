// eslint-disable-next-line import/order
import newrelic from 'newrelic';
import express from 'express';
import ExampleRoutes from './example/example.routes.js';

const app = express();
const port = 3000;

app.use('/example', ExampleRoutes);

app.get('/this/works/fine', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
