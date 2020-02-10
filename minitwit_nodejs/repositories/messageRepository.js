'use strict'

const helper = require('./databaseHelper')

/**
 * Get amount messages from the database.
 * @param {int} amount 
 */
function getAllMessages(amount) {
    return helper.getAll(`select message.*, user.* from message, user
                where message.author_id = user.user_id
                order by message.pub_date desc limit ?`, [amount])
};

module.exports = {
    getAllMessages
}