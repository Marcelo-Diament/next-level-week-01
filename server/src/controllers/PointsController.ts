import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async show(request: Request, response: Response) {
        const { id } = request.params;

        // Gets the first occurrence where id from request matches id of registered point
        const point = await knex('points').where('id', id).first();

        // If no point was found, returns a 404 status with that message
        if (!point) {
            return response.status(404).json({ message: 'Ops! Point not found...' })
        }

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'points_items.idem_id')
            .where('point_items.point_id', id)
            .select('items.title');

        // If the point was found, returns it
        return response.json({ point, items });
    }

    async create(request: Request, response: Response) {
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

        // Defining point props (except by items, that are foreign registers) - using short syntax (once name and value of property is the same)
        const point = {
            image: 'fake-image',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        };

        // Getting 'create' props with knex transaction
        const insertedIds = await trx('points').insert(point);

        const point_id = insertedIds[0];

        const pointItems = items.map((item_id: number) => {
            return {
                item_id,
                point_id
            };
        });

        // Inserts point_id to point_items table (fk/pk)
        await trx('point_items').insert(pointItems);

        return response.json({
            id: point_id,
            ...point
        });
    }

};

export default ItemsController;