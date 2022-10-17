'use strict'

module.exports = (app) => {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index)
}