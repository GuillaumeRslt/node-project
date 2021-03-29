'use strict';

const { Service } = require('schmervice');

module.exports = class MovieService extends Service {

    create() {

        console.log('create movie');

    }
};
