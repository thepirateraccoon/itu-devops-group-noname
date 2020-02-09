'use strict'

/**
 * User model defined using mongoose.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {
        type: String,
        required: "A username is required."
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);