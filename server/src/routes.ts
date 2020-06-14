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
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`
        }
    });

    // Returns items
    return response.json(serializedItems);
})

// A post rout to create new point
routes.post('/points', async (request, response) => {
    // Creating point properties with destructuring syntax (same as const item = request.body.item for each os the properties)
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body;

    // Creatig a transaction that avoids register insert if any of following querires gets an error
    const trx = await knex.transaction();

    // Defining 'create' props with knex (except by items, that are foreign registers) - using short syntax (once name and value of property is the same)
    const insertedIds = await knex('points').insert({
        image: 'fake-image',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf
    });

    const point_id = insertedIds[0];

    const pointItems = items.map((item_id: number) => {
        return {
            item_id,
            point_id: point_id
        }
    });

    // Inserts point_id to point_items table (fk/pk)
    await trx('point_items').insert(pointItems);

    return response.json({ success: true});
})

// Exports routes so they can be accessed by app
export default routes;