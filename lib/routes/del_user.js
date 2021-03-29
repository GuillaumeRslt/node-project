'use strict';

module.exports = {
    method: 'DELETE',
    path: '/user/{id}',
    options: {
        tags: ['api'],
        auth: {
            scope: ['admin']
        }
    },
    handler: async (request, h) => {

        const { userService } = request.services();

        const res =  await userService.delete(request.params.id);

        if (res) {
            return '';
        }

        return res;
    }
};
