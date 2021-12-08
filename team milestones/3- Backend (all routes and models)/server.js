// Importing express as a function
const express = require('express');

// Import dotenv
require('dotenv').config();

// CORS (Cross-Origin Resource Sharing)
const cors = require('cors');

// Import express-form-data to process HTTP POST requests
const expressFormData = require('express-form-data');

// Import mongoose to connect to MongoDB Atlas
const mongoose = require('mongoose');

const ProductModel = require('./models/ProductModel.js');
const productRoutes = require('./routes/product-route.js');

const ShoppingCartModel = require('./models/ShoppingCartModel.js');
const shoppingCartRoutes = require('./routes/shoppingCart-route.js');

// Run the express function to get the methods
const server = express(); 

// Configure express-form-data for server
// Is for reading HTML form data
server.use( expressFormData.parse() );


// Declare the connnection string
const connectionString = process.env.MONGODB_CONNECTION_STRING;

// Create the mongoose config object
const connectionConfig = {
    'useNewUrlParser': true,
    'useUnifiedTopology': true
}

// Use the .connect() method to connect to MongoDB
mongoose
.connect( connectionString, connectionConfig )
// If connection successful, then...
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

// This is only here to quicklt check that the backend is running
server.get('/', function(req, res){res.send('Welcome')});

server.use(
    '/product', productRoutes         // http://www.something.com/user/
);

server.use(
    '/cart', shoppingCartRoutes         // http://www.something.com/user/
);
// This is the last thing in your file
server.listen(
    process.env.PORT,
    function() {
        console.log('connected to http://localhost:3001/');
    }
);
