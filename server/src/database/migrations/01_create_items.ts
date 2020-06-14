// Imports Knex type from knex lib
import Knex from 'knex';

// Defining up method of migration using knex lib
export async function up(knex: Knex) {
    // Creates items table when migration is run
    return knex.schema.createTable('items', table => {
        // Creating table columns/fields
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

// Defines down method (to make rollbacks)
export async function down(knex: Knex) {
    // Drops points table
    return knex.schema.dropTable('items');
}