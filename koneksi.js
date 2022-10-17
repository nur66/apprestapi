// Panggil library sql nya
var mysql = require('mysql');

// Buat koneksi
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbrestapi'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('MySql terkoneksi');
})

module.exports = conn;
// Kalau di JS sql dijadikan module