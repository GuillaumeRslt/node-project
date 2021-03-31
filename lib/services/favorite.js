'use strict';

const { Service } = require('schmervice');

module.exports = class FavoriteService extends Service {

    add(fav) {

        const { Favorite } = this.server.models();

        return Favorite.query().insert(fav);
    }

    query() {

        const { Favorite } = this.server.models();

        return Favorite.query();
    }

    find(fav) {

        const { Favorite } = this.server.models();

        return Favorite.query().where({
            id_user: fav.id_user
        });
    }

    delete(id_film, fav) {

        const { Favorite } = this.server.models();

        return Favorite.query().where({
            id_film: id_film,
            id_user: fav.id_user
        }).delete();

    }

};
