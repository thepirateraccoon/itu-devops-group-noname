'use strict'

/**
 * Main server instance.
 */

require('dotenv').config();
const config = require('./configs')();
const port = config.app.port;
const express = require('express');
const app = express();

const mongoose = require('mongoose');

// Import models
let User = require('./models/usersModel');


// Setup/connect database
const dbUri = `mongodb://${config.mongo.host}/${config.mongo.name}`;
const dbOptions = 
{
    useUnifiedTopology: true, 
    useNewUrlParser: true
};

mongoose.connect(dbUri, dbOptions).then(
    () => { console.log('Database connection successful.') },
    err => { 
        console.error.bind(console, `Database connection error: ${err}.`) 
        throw err;
    }
);


// Before middlewares
app.use(express.json());

// Setup API routing and controllers
[
    'users'
]
.map(endpoint => {
    let router = require(`./routes/${endpoint}Routes`);
    app.use(`/api/${endpoint}`, router.router);
});


// After middleware
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' : was not found.'})
});


// Start server
app.listen(port, () => console.log(`Minitwit server listening on port ${port}.`));