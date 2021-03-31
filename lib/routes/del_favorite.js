'use strict';

const Joi = require('joi');

module.exports = {
    method: 'DELETE',
    path: '/favorite/{id_film}',
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

        const res =  await favoriteService.delete(request.params.id_film, request.payload);

        if (res) {
            return '';
        }

        return res;
    }
};
