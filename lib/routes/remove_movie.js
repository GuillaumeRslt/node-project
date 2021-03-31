'use strict';

module.exports = {
    method: 'PATCH',
    path: '/movie/remove/{id}',
    options: {
        tags: ['api'],
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

        await mailService.removeMovie(mails, movie);

        return await movieService.remove(request.params.id);

    }
};
