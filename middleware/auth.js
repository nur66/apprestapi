const mysql = require('mysql');
const connection = require('../koneksi');
const md5 = require('MD5');
const response = require('../res');
const jwt = require('jsonwebtoken');
const config = require('../config/secret');
const ip = require('ip');

// controller untuk register
exports.registrasi = function (req, res) {
    var post = {
         username: req.body.username,
         email: req.body.email,
         password: req.body.password,
         role: req.body.role,
         tanggal_daftar: new Date(),
    }

    var query = "SELECT email FROM ?? WHERE ??=?";
    var table = ["user", "email", post.email];

    query = mysql.format(query, table);

    // dia akan mengecek apakah emailnya sudah terdaftar atau belum
    connection.query(query, function (error, rows) {
          if (error) {
               console.log(error);
          } else {
            if(rows.length == 0){
                var query = "INSERT INTO ?? SET ?";
                var table = ["user"];
                query = mysql.format(query, table);
                connection.query(query, post, function (error, rows) {
                    if (error) {
                        console.log(error);
                    } else {
                        response.ok("Berhasil menambahkan data user baru", res)
                    }
                })
            }else{
                response.ok("email sudah terdaftar")
            }
        }
    })
}