'use strict';

var response = require('./res');
var connection = require('./koneksi');

// Buat module bernama index
exports.index = (req, res) => {
    response.ok("Aplikasi REST APIku sudah berjalan", res);
}

// Menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = (req, res) => {
    connection.query('SELECT * FROM mahasiswa', (error, rows, field)=>{
        if(error){
            connection.log(error)
        }else{
            response.ok(rows, res)
        }
    })
}

// Menampilkan data mahasiswa berdasarkan id mahasiswa
exports.tampilberdasarkanid = (req, res) => {
    let id = req.params.id
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id], 
        (error, rows, fields) => {
            if(error){
                connection.log(error)
            }else{
                response.ok(rows, res)
            }
    })
}