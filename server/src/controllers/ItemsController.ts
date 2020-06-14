import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
    
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
    }
}

export default ItemsController;