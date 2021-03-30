'use strict';

module.exports = {
    method: 'DELETE',
    path: '/movie/{id}',
    options: {
        tags: ['api'],
        auth: {
            scope: ['admin']
        }
    },
    handler: async (request, h) => {

        const { movieService } = request.services();

        const res =  await movieService.delete(request.params.id);

        if (res) {
            return '';
        }

        return res;
    }
};
