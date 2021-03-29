'use strict';

module.exports = {

    async up(knex) {

        await knex.schema.table('user', (table) => {

            table.string('role').notNull().default('user');
        });
    },

    async down(knex) {

        await knex.schema.dropTableIfExists('user');
    }
};
