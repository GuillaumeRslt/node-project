'use strict';

const Joi = require('joi');

module.exports = {
    method: 'PATCH',
    path: '/movie/{id}',
    options: {
        tags: ['api'],
        validate: {
            payload: Joi.object({
                title: Joi.string().example('The lord of the rings').description('Title of the movie'),
                director: Joi.string().example('Peter Jackson').description('Director of the movie'),
                releaseDate: Joi.date().example('2003-12-17').description('Release date of the movie'),
                description: Joi.string().example('A really great movie!').description('description of the movie')
            })
        },
        auth: {
            scope: ['admin']
        }
    },
    handler: async (request, h) => {

        const { movieService, userService, mailService } = request.services();

        const users = await userService.favorite(request.params.id);

        const mails = [];

        users.forEach( (user) => {
            mails.push(user.mail);
        });

        const movie = await movieService.find(request.params.id);

        await mailService.updateMovie(mails, movie);

        return await movieService.update(request.params.id, request.payload);

    }
};
