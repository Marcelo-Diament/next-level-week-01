import express from 'express';
import path from 'path';

// Imports routes files
import routes from './routes';

// Creates express app with its methods
const app = express();

// Declaring that JSON resource will be used
app.use(express.json());

// Using routes
app.use(routes);

// Using uploads folder to access static files
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// Defines port to access app
app.listen(3333);
