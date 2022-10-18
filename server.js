const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const app = express();

// parse aplication/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// panggil routes
var routes = require('./routes');
routes(app);

// daftarkan menu routes dari index
// karena routesnya ada di middleware
app.use('/auth', require('./middleware'));


 app.listen(2311, ()=> {
    console.log('Server started on port 2311');
 });