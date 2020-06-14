import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
    async show(request: Request, response: Response) {
        const { id } = request.params;

        const point = await knex('points').where('id', id).first();

        if (!point) {
            return response.status(404).json({ message: 'Ops! Point not found...' });
        }

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'points_items.idem_id')
            .where('point_items.point_id', id)
            .select('items.title');

        return response.json({ point, items });
    }

    async create(request: Request, response: Response) {
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
        
        const trx = await knex.transaction();
        
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
        
        const insertedIds = await trx('points').insert(point);

        const point_id = insertedIds[0];

        const pointItems = items.map((item_id: number) => {
            return {
                item_id,
                point_id
            };
        });

        await trx('point_items').insert(pointItems);

        return response.json({
            id: point_id,
            ...point
        });
    }

}

export default PointsController;