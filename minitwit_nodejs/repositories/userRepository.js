'use strict'

const helper = require('./databaseHelper')

/**
 * Get amount messages from the database.
 * @param {string} username
 */
function getUserID(username) {
    return helper.getAll(`select user.user_id from user where user.username = ?`, [username])
};

/**
 * Get amount messages from the database.
 * @param {int} whoID
 * @param {int} whomID
 */
function follow(whoID, whomID) {
    return helper.getAll(`insert into follower 
        (who_id, whom_id) values (?, ?)`, [whoID, whomID])//TODO getAll?
};

/**
 * Get amount messages from the database.
 * @param {int} whoID
 * @param {int} whomID
 */
function unfollow(whoID, whomID) {
    return helper.getAll(`delete from follower 
        where who_id=? and whom_id=?`, [whoID, whomID])//TODO getAll?
};

module.exports = {
    getUserID,
    follow,
    unfollow
}