'use strict';

const { Service } = require('schmervice');

module.exports = class MovieService extends Service {

    create(movie) {

        const { Movie } = this.server.models();

        return Movie.query().insertAndFetch(movie);
    }

    query() {

        const { Movie } = this.server.models();

        return Movie.query();
    }

    add(id) {

        const { Movie } = this.server.models();

        return Movie.query().findById(id).patch({ available: true });
    }

    update(id, movie) {

        const { Movie } = this.server.models();

        return Movie.query().findById(id).patch(movie);
    }

    remove(id) {

        const { Movie } = this.server.models();

        return Movie.query().findById(id).patch({ available: false });
    }

    delete(id) {

        const { Movie } = this.server.models();

        return Movie.query().findById(id).delete();

    }

    find(id) {

        const { Movie } = this.server.models();

        return Movie.query().findById(id);
    }

};
