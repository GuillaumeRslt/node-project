'use strict';

module.exports = {
    method: 'GET',
    path: '/movies',
    options: {
        tags: ['api'],
        auth: {
            scope: ['admin', 'user']
        }
    },
    handler: async (request, h) => {

        const { movieService } = request.services();

        return await movieService.query();
    }
};
