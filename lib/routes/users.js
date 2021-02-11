'use strict';

const Joi = require('joi');

module.exports = {
    method: 'get',
    path: '/users',
    handler: async (request, h) => {

        const { User } = request.models();

        // Objection retourne des promeses, il ne faut pas oublier des les await.
        // const user = await User.query();

        const users = await User.query();

        return users;
    }
};