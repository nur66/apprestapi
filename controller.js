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

// Menambahkan data mahasiswa
exports.tambahMahasiswa = (req, res) => {
    const nim = req.body.nim
    const nama = req.body.nama
    const jurusan = req.body.jurusan

    connection.query("INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?,?,?)",
        [nim, nama, jurusan],
        (error, rows, fields)=> {
            if(error){
                console.log(error);
            }else{
                response.ok("Data berhasil ditambahkan", res)
            }
        })
}

// Mengubah data mahasiswa
exports.mengubahData = (req, res) => {
    console.log(req.body);
    let id = req.body.id
    const nim = req.body.nim
    const nama = req.body.nama
    const jurusan = req.body.jurusan

    connection.query("UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?", [nim,nama,jurusan,id],
    (error, rows, fields) => {
        if(error){
            console.log(error);
        }else{
            response.ok("Data berhasil diubah", res)
        }
    })
}

// Menghapus data
exports.menghapusData = (req, res) => {
    let id = req.body.id
    connection.query("DELETE FROM mahasiswa WHERE id_mahasiswa=?", [id],
    (error, rows, fields) => {
        if(error){
            console.log(error);
        }else{
            response.ok("Data berhasil dihapus", res)
        }
    })
}

// Menampilkan matakuliah group
exports.tampilGroupMatakuliah = (req, res) => {
    connection.query('SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks FROM krs JOIN mahasiswa JOIN matakuliah WHERE krs.id_mahasiswa = mahasiswa.id_mahasiswa AND krs.id_matakuliah = matakuliah.id_matakuliah ORDER BY mahasiswa.id_mahasiswa;',
    (error, rows, fields) => {
        if(error){
            console.log(error);
        }else{
            response.oknested(rows, res)
        }
    })
}