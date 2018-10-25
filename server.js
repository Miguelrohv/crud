const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql'); 
//port used if none given
const port = process.env.port || 3000;
//route specified
const items = require('./api/routes/items');
app.use('/items',items);
//parsing body for params , body ,etc.
app.use(bodyParser.urlencoded({extended:false}));
//extracts json data
app.use(bodyParser.json());