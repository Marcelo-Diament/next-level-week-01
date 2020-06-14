import express from 'express';

// Importing DB connection
import knex from './database/connection';

// Allow us to use routes in a separated file
const routes = express.Router();

// A get route to index/root route (we use async await 'cause the query response can take some time to return registers)
routes.get('/items', async (request, response) => {
    
    // Defining items as a DB knex selection (equivalent to SELECT * FROM items)
    const items = await knex('items').select('*');

    // Serializes items to make client-side returns more accessible
    const serializedItems = items.map(item => {
        return {
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`
        }
    });

    // Returns items
    return response.json(serializedItems);
})

// Exports routes so they can be accessed by app
export default routes;