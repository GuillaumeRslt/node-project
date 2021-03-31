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

        const { movieService, mailService, userService } = request.services();

        const users = await userService.query();

        const mails = [];

        users.forEach( (user) => {
            mails.push(user.mail);
        });

        const movie = await movieService.find(request.params.id);

        await mailService.newMovie(mails, movie);

        return await movieService.add(request.params.id);

    }
};
