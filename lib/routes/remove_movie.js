'use strict';

module.exports = {
    method: 'PATCH',
    path: '/movie/remove/{id}',
    options: {
        tags: ['api'],
        auth: {
            scope: ['admin']
        }
    },
    handler: async (request, h) => {

        const { movieService } = request.services();

        return await movieService.remove(request.params.id);

    }
};
