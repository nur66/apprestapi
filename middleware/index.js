const express = require('express');
const auth = require('./auth');
const router = express.Router();

// daftarkan menu/function/module regiser
router.post('/api/v1/register', auth.registrasi);

module.exports = router