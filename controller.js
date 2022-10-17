'use strict';

var response = require('./res');
var connection = require('./koneksi');

// Buat module bernama index
exports.index = (req, res) => {
    response.ok("Aplikasi REST APIku sudah berjalan");
}