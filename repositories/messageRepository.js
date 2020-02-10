'use strict'

const helper = require('./repositoryHelpers')

/**
 * Get amount messages from the database.
 * @param {int} amount 
 */
function getAllMessages(amount) {
    helper.getAll(`select message.*, user.* from message, user
                where message.author_id = user.user_id
                order by message.pub_date desc limit ?`, amount)
        .then(function () {
            console.log('GetAllMessages suceeded.')
        })
        .catch(function () {
            console.log('GetAllMessages failed.')
        });
};

module.exports = {
    getAllMessages
}