'use strict'

const helper = require('./databaseHelper')

 /**
  * 
  * @param {string} username 
  * @param {string} password 
  */
function getIdUsingPassword(username, password) {
    return helper.getSingle(`select user.user_id from user where user.username = ? and user.pw_hash = ?`, [username, password]);
};

/**
 * Get amount messages from the database.
 * @param {string} username
 */
function getUserID(username) {
    return helper.getSingle(`select user.user_id from user where user.username = ?`, [username]);
};

/**
 * Get amount messages from the database.
 * @param {string} username
 * @param {string} password
 * @param {string} email
 */
function addUser(username, password, email) {
    return helper.insert(`insert into user (username, pw_hash, email) values (?, ?, ?)`, [username, password, email]);
};

/**
 * Get amount messages from the database.
 * @param {int} whoID
 * @param {int} whomID
 */
function follow(whoID, whomID) {
    return helper.insert(`insert into follower 
        (who_id, whom_id) values (?, ?)`, [whoID, whomID]);
};

/**
 * Get amount messages from the database.
 * @param {int} whoID
 * @param {int} whomID
 */
function unfollow(whoID, whomID) {
    return helper.insert(`delete from follower 
        where who_id=? and whom_id=?`, [whoID, whomID]);//TODO getAll?
};

module.exports = {
    getUserID,
    follow,
    unfollow,
    getIdUsingPassword,
    addUser
}