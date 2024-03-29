'use strict';

module.exports = {
    method: 'GET',
    path: '/favorites',
    options: {
        tags: ['api'],
        auth: {
            scope: ['admin']
        }
    },
    handler: async (request, h) => {

        const { favoriteService } = request.services();

        return await favoriteService.query();
    }
};
