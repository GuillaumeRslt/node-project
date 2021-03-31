'use strict';

const Joi = require('joi');

module.exports = {
    method: 'POST',
    path: '/favorite',
    options: {
        auth: {
            scope: ['user']
        },
        tags: ['api'],
        validate: {
            payload: Joi.object({
                id_film: Joi.number().integer().greater(0),
                id_user: Joi.number().integer().greater(0)
            })
        }
    },
    handler: async (request, h) => {

        const { favoriteService } = request.services();

        return await favoriteService.add(request.payload);
    }
};
