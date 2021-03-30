'use strict';

const Joi = require('joi');
const { Model } = require('schwifty');

module.exports = class Movie extends Model {

    static get tableName() {

        return 'movie';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer().greater(0),
            title: Joi.string().example('The lord of the rings').description('Title of the movie'),
            director: Joi.string().example('Peter Jackson').description('Director of the movie'),
            releaseDate: Joi.date().example('2003-12-17').description('Release date of the movie'),
            description: Joi.string().example('A really great movie!').description('description of the movie'),
            available: Joi.boolean().default(false).description('If the movie is in the library or not'),
            createdAt: Joi.date(),
            updatedAt: Joi.date()
        });
    }

    $beforeInsert(queryContext) {

        this.updatedAt = new Date();
        this.createdAt = this.updatedAt;
        this.available = false;
    }

    $beforeUpdate(opt, queryContext) {

        this.updatedAt = new Date();
    }

};