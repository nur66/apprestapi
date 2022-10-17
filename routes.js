'use strict'

module.exports = (app) => {
    var jsonku = require('./controller');

    // jsonku adalah controller dan didalam controller ada menu index
    app.route('/')
        .get(jsonku.index)
}