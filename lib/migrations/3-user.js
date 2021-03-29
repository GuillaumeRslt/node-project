'use strict';

module.exports = {

    async up(knex) {

        await knex.schema.table('user', (table) => {

            table.renameColumn('role', 'scope');
        });
    },

    async down(knex) {

        await knex.schema.dropTableIfExists('user');
    }
};
