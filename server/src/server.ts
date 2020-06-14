import express from 'express';

// Imports routes files
import routes from './routes';

// Creates express app with its methods
const app = express();

// Declaring that JSON resource will be used
app.use(express.json());

// Using routes
app.use(routes);

// Defines port to access app
app.listen(3333);
