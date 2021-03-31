'use strict';

const { Service } = require('schmervice');

module.exports = class FavoriteService extends Service {

    add(fav) {

        const { Favorite } = this.server.models();

        return Favorite.query().insertAndFetch(fav);
    }

    query() {

        const { Favorite } = this.server.models();

        return Favorite.query();
    }

    find(fav) {

        const { Favorite } = this.server.models();

        return Favorite.query().find({
            id_user: fav.id_user
        });
    }

    delete(id_user, fav) {

        const { Favorite } = this.server.models();

        return Favorite.query().find({
            id_user: id_user,
            id_film: fav.id_film
        }).delete();

    }

};
