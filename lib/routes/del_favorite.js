'use strict';

const Joi = require('joi');
const Boom = require('@hapi/boom');

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

        const fav = await favoriteService.exist(request.payload.id_user, request.params.id_film);

        if (!fav.length) {
            return Boom.boomify(new Error('Already remove'), { statusCode: 404 });
        }

        const res =  await favoriteService.delete(request.params.id_film, request.payload);

        if (res) {
            return '';
        }

        return res;
    }
};
