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

        const { movieService, userService, mailService, favoriteService } = request.services();

        const users = await userService.favorite(request.params.id);

        const mails = [];

        await users.forEach(
            async (user) => {
                mails.push(user.mail);
                console.log(user.id);
                await favoriteService.delete(request.params.id, { id_user: user.id });
            });

        const movie = await movieService.find(request.params.id);

        await mailService.removeMovie(mails, movie);

        return await movieService.remove(request.params.id);

    }
};
