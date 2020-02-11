'use strict'

const helper = require('./databaseHelper')

/**
 * Get amount messages from the database.
 * @param {string} username
 */
function getUserID(username) {
    return helper.getAll(`select user.user_id from user where user.username = ?`, [username])
};

module.exports = {
    getUserID
}