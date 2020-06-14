import express from 'express';

// Allow us to use routes in a separated file
const routes = express.Router();

// A get route to index/root route
routes.get('/', (request, response) => {
    // Returns users JSON
    return response.json({ message: 'Hey there!'});
})

// Exports routes so they can be accessed by app
export default routes;