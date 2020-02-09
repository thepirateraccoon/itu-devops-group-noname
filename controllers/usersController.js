'use strict'

/**
 * User controller handling different endpoint requests.
 */

const mongoose = require('mongoose');
let User = mongoose.model('User');

function getAllUsers(req, res) {
    console.log('getAllUsers called.')
    User.find({}, (err, task) => {
        if (err) {
            res.send(err)
        };
        res.send(task);
    });
};

function addUser(req, res) {
    console.log('addUser called.')
    let newUser = new User(req.body);
    newUser.save((err, task) => {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};

module.exports = {
    getAllUsers,
    addUser
};