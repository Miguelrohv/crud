const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
//port used if none given
const port = process.env.port || 3000;
//parsing body for params , body ,etc.
app.use(bodyParser.urlencoded({extended:false}));
//extracts json data
app.use(bodyParser.json());
//route specified
const items = require('./api/routes/items');
app.use('/items',items);

app.get('/', function(req, res) {
    res.render('pages/index');
});

//app listen port
app.listen(port, function () {
    console.log('Node app is running on port:'+port);
});