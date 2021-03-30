'use strict';

const Joi = require('joi');

module.exports = {
    method: 'PATCH',
    path: '/movie/add/{id}',
    options: {
        tags: ['api'],
        auth: {
            scope: ['admin']
        }
    },
    handler: async (request, h) => {

        const { movieService } = request.services();

        return await movieService.add(request.params.id);

    }
};
