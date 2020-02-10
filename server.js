/**
 * Main server instance.
 */

'use strict'

require('dotenv').config();
const config = require('./configs')();
const express = require('express');
const app = express();
const port = config.app.port;

// Using SQLite3. See https://github.com/mapbox/node-sqlite3
const sqlite3 = require('sqlite3').verbose();

module.exports.db = new sqlite3.Database('./data/minitwit.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the minitwit.db SQlite database.');
});

/* Repositories */
const messageRepository = require('./repositories/messageRepository');

/* Before middlewares */
app.use(express.json());
app.use(express.static('static'));

// Using EJS. See https://github.com/mde/ejs/wiki/Using-EJS-with-Express
app.set('view engine', 'ejs');

/* Routing endpoints below*/

// Home
app.get('/', function(req, res) {

    // TODO: Db: if user logged in then show private timeline
    res.redirect('/public');
});


// Public timeline
app.get('/public', async function(req, res) {

    let allMesages = await messageRepository.getAllMessages(30);

    res.render('pages/timeline', {
        messages: allMesages
    });
});

/* After middleware */
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' : was not found.'})
});

/* Start server */
app.listen(port, () => console.log(`Minitwit server listening on port ${port}.`));