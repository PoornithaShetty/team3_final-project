const express = require('express');

const expressFormData = require('express-form-data');

const mongoose = require('mongoose');
const UserModel = require('./models/UserModel.js');
const userRoutes = require('./routes/user-routes.js');

const server = express(); 

server.use( expressFormData.parse() );

const connectionString = ""

const connectionConfig = {
    'useNewUrlParser': true,
    'useUnifiedTopology': true
}

mongoose
.connect( connectionString, connectionConfig )
.then(
    function() {
        console.log('DB is connected');
    }
)
.catch(
    function() {
        console.log('DB not connected');
    }
)

server.get('/', function(req, res){res.send('Welcome')});


server.use(
    '/user', userRoutes         
);

server.listen(
    3001,
    function() {
        console.log('connected to http://localhost:3001/');
    }
);