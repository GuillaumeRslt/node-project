'use strict';

const Joi = require('joi');

module.exports = {
    method: 'GET',
    path: '/favorite/user/',
    options: {
        tags: ['api'],
        auth: {
            scope: ['user']
        },
        validate: {
            payload: Joi.object({
                id_user: Joi.number().integer().greater(0)
            })
        }
    },
    handler: async (request, h) => {

        const { favoriteService } = request.services();

        return await favoriteService.find(request.payload);
    }
};
