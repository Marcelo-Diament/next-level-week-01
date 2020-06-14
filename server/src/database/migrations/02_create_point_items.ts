// Imports Knex type from knex lib
import Knex from 'knex';

// Defining up method of migration using knex lib
export async function up(knex: Knex) {
    // Creates point_items table when migration is run
    return knex.schema.createTable('point_items', table => {
        // Creating table columns/fields
        table.increments('id').primary();
        // Defining foreign keys
        table.integer('item_point').notNullable().references('id').inTable('points');
        table.integer('item_id').notNullable().references('id').inTable('items');
    });
}

// Defines down method (to make rollbacks)
export async function down(knex: Knex) {
    // Drops points table
    return knex.schema.dropTable('point_items');
}