import express from 'express';

// Imports Points Controller Class
import PointsController from './controllers/PointsController';
// Instantiates a Point Controller
const pointsController = new PointsController();

import ItemsController from './controllers/ItemsController';
const itemsController = new ItemsController();

// Allow us to use routes in a separated file
const routes = express.Router();

// A get route to get Items using itemsController index method
routes.get('/items', itemsController.index);

// Gets points (with optional search filter)
routes.get('/points:id', pointsController.show);
// A post route to create new point using pointsController create method
routes.post('/points', pointsController.create);

// Exports routes so they can be accessed by app
export default routes;