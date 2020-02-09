'use strict'

// var mongoose = require('mongoose');

function getAllUsers(req, res) {
    res.send('I found all users');
}

module.exports = {
    getAllUsers
}