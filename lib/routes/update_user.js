'use strict';

const Joi = require('joi');

module.exports = {
    method: 'PATCH',
    path: '/user/{id}',
    options: {
        tags: ['api'],
        validate: {
            payload: Joi.object({
                firstName: Joi.string().required().min(3).example('John').description('Firstname of the user'),
                lastName: Joi.string().required().min(3).example('Doe').description('Lastname of the user'),
                password: Joi.string().min(8).description('Password of the user'),
                mail: Joi.string().email().description('Email of the user'),
                username: Joi.string().min(3).description('Username of the user')
            })
        },
        auth: {
            scope: ['admin']
        }
    },
    handler: async (request, h) => {

        const { userService } = request.services();

        return await userService.update(request.params.id, request.payload);

    }
};
