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
const userRepository = require('./repositories/userRepository');

/* Before middlewares */
app.use(express.json());
app.use(express.static('static'));

// Using EJS. See https://github.com/mde/ejs/wiki/Using-EJS-with-Express
app.set('view engine', 'ejs');

/* Routing endpoints below*/

// Home
app.get('/', async function(req, res) {

    //TODO check if user is logged in, if not:
    //res.redirect('/public');

    let userID = 1; //TODO
    let allMesages = await messageRepository.getFollowedMessages(userID, 30);

    res.render('pages/timeline', {
        messages: allMesages
    });
});


// Public timeline
app.get('/public', async function(req, res) {

    let allMesages = await messageRepository.getAllMessages(30);

    res.render('pages/timeline', {
        messages: allMesages
    });
});

// User timeline
app.get('/user/:username', async function(req, res) {

    let username = req.params.username;
    let userID = 1; //TODO + if user not found, 404
    let allMesages = await messageRepository.getUserMessages(userID, 30);

    res.render('pages/timeline', {
        messages: allMesages
    });
});

// Follow
app.get('/user/:username/follow', async function(req, res) {

    let whomUsername = req.params.username;
    let whoID = 0; //TODO + if not logged in, 401
    //res.status(401).send({url: req.originalUrl + ' : was not found.'})
    let whomID = messageRepository.getUserID(whomUsername); //TODO if not found, 404
    //res.status(404).send({url: req.originalUrl + ' : was not found.'})
    await userRepository.follow(whoID, whomID);

    res.redirect('/user/' + whomUsername);
});

// Unfollow
app.get('/user/:username/unfollow', async function(req, res) {

    let whomUsername = req.params.username;
    let whoID = 0; //TODO + if not logged in, 401
    //res.status(401).send({url: req.originalUrl + ' : was not found.'})
    let whomID = messageRepository.getUserID(whomUsername); //TODO if not found, 404
    //res.status(404).send({url: req.originalUrl + ' : was not found.'})
    await userRepository.unfollow(whoID, whomID);

    res.redirect('/user/' + whomUsername);
    res.status(404).send({url: req.originalUrl + ' : was not found.'})
});

/* After middleware */
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' : was not found.'})
});

/* Start server */
app.listen(port, () => console.log(`Minitwit server listening on port ${port}.`));