// Imports Knex type from knex lib
import Knex from 'knex';

// Defining up method of migration using knex lib
export async function up(knex: Knex) {
    // Creates points table when migration is run
    return knex.schema.createTable('points', table => {
        // Creating table columns/fields
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
}

// Defines down method (to make rollbacks)
export async function down(knex: Knex) {
    // Drops points table
    return knex.schema.dropTable('points');
}