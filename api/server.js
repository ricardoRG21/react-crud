const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const route = require('./crud.route');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bdejemplo'
});
 
// connect to database
mc.connect();
app.get('/',function(req,res){
    res.send('server crud ...');
});
route(app);

app.listen(PORT,function(){
    console.log('server is running on port:',PORT);
});