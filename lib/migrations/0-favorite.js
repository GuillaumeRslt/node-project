'use strict';

module.exports = {

    async up(knex) {

        await knex.schema.createTable('favorite', (table) => {

            table.integer('id_film').notNull();
            table.integer('id_user').notNull();
        });
    },

    async down(knex) {

        await knex.schema.dropTableIfExists('favorite');
    }
};
