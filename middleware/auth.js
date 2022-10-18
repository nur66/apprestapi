const mysql = require('mysql');
const connection = require('../koneksi');
const md5 = require('MD5');
const response = require('../res');
const jwt = require('jasonwebtoken');
const config = require('../config/secret');
const ip = require('ip');

// controller untuk register
exports.registrasi = (req, res) => {
    const post = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        tanggal_daftar: new Date()
    }

    const query = "SELECT email FROM ?? WHERE ??"
    const table = ["user", "email", post.email]

    query = mysql.format(query,table)

    // dia akan mengecek apakah ada emailnya?, kalau belum terdaftar maka akan di tambahkan ke table user
    connection.query(query, (error, rows) => {
        if(error){
            console.log(error);
        }else{
            if(rows.length == 0){
                const query = "INSERT INTO ?? SET ?"
                const table = ["user"]
                query = mysql.format(query, table)
                connection.query(query, post, (error, rows)=> {
                    if(error){
                        console.log(error);
                    }else{
                        response.ok("Berhasil menambahkan data user baru", res)
                    }
                })
            }else{
                response.ok("email sudah terdaftar")
            }
        }
    })
}