'use strict'

function setup(app) {
    var controller = require('../controllers/userController');

    // Routes
    app.route('/users')
    .get(controller.getAllUsers);

    // app.route('/users/:userId')
    //     .get(controller.getUser);
};

module.exports = {
    setup
}