'use strict';

const Joi = require('joi');
const Boom = require('@hapi/boom');
const Jwt = require('@hapi/jwt');

module.exports = {
    method: 'POST',
    path: '/user/login',
    options: {
        auth: false,
        tags: ['api'],
        validate: {
            payload: Joi.object({
                password: Joi.string().min(8).description('Password of the user'),
                mail: Joi.string().email().description('Email of the user')
            })
        }
    },
    handler: async (request, h) => {

        const { userService } = request.services();

        const user = await userService.login(request.payload.mail, request.payload.password);

        if (user) {
            const token = Jwt.token.generate(
                {
                    aud: 'urn:audience:iut',
                    iss: 'urn:issuer:iut',
                    firstName: user.firstName,
                    lastName: user.lastName,
                    scope: user.scope,
                    email: user.mail
                },
                {
                    key: 'random_string', // La clé qui est définit dans lib/auth/strategies/jwt.js
                    algorithm: 'HS512'
                },
                {
                    ttlSec: 14400 // 4 hours
                }
            );
            return token;
        }

        return Boom.boomify(new Error('Unauthorized'), { statusCode: 401 });

    }
};
