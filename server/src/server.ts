import express from 'express';
import path from 'path';

// Imports routes files
import routes from './routes';

// Creates express app with its methods
const app = express();

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);
