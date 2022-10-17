const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// parse aplication/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

 app.listen(2311, ()=> {
    console.log('Server started on port');
 });