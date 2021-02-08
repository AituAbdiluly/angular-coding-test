import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import calcRouter from './routes/calcRoutes';

const app = express();
const port = 3000;

// MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

// ROUTES
app.use('/api/v1/calculations', calcRouter);

// BOOTSTRAP
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
