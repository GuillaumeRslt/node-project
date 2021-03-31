'use strict';

module.exports = {
    method: 'get',
    path: '/users',
    options: {
        tags: ['api'],
        auth: {
            scope: ['admin']
        }
    },
    handler: async (request, h) => {

        const { userService } = request.services();

        return await userService.query();
    }
};
