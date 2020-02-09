'use strict'

require('dotenv').config();

const config = require('./configs')();
const express = require('express');
const app = express();
const port = config.app.port;

// Before middlewares
app.use(express.json());

// Setup routing/controllers
[
    'userRoutes'
]
.map(name => {
    var router = require('./routes/' + name);
    router.setup(app);
});

// After middleware
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' Sorry, not found.'})
});

// Start server
app.listen(port, () => console.log(`Minitwit server listening on port ${port}.`));