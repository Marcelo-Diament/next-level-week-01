import Knex from 'knex';

// Seeds our tables
export async function seed(knex: Knex) {
    // Declares which table will be populated and insert registers with insert method (each register in a object inside its container array)
    await knex('items').insert([
        { title: 'Lâmpadas', image: 'lampadas.svg'},
        { title: 'Pilhas e Baterias', image: 'baterias.svg'},
        { title: 'Papéis e Papelão', image: 'papeis-papelao.svg'},
        { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg'},
        { title: 'Resíduos Orgânicos', image: 'organicos.svg'},
        { title: 'Óleo de Cozinha', image: 'oleo.svg'},
    ])
}