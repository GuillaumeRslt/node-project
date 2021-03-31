'use strict';

const { Service } = require('schmervice');
const Encrypt = require('@grslt/iut-encrypt');

module.exports = class UserService extends Service {

    create(user) {

        const { User } = this.server.models();

        user.password = Encrypt.sha1(user.password + '/*@4');

        return User.query().insertAndFetch(user);
    }

    query() {

        const { User } = this.server.models();

        return User.query();
    }

    delete(id) {

        const { User } = this.server.models();

        return User.query().findById(id).delete();

    }

    update(id, user) {

        const { User } = this.server.models();

        if (user.password) {
            user.password = Encrypt.sha1(user.password + '/*@4');
        }

        return User.query().findById(id).patch(user);
    }

    login(mail, password) {

        const { User } = this.server.models();

        return User.query().findOne({
            mail: mail,
            password: Encrypt.sha1(password + '/*@4')
        });
    }

    favorite(id_film) {

        const { User } = this.server.models();

        return User.query()
            .join('favorite', 'user.id', 'favorite.id_user')
            .where('favorite.id_film', id_film);
    }

};
