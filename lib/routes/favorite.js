'use strict';

const Joi = require('joi');
const Boom = require('@hapi/boom');

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

        const fav = await favoriteService.exist(request.payload.id_user, request.payload.id_film);

        if (fav.length > 0) {
            return Boom.boomify(new Error('Already exist'), { statusCode: 404 });
        }

        return await favoriteService.add(request.payload);
    }
};
