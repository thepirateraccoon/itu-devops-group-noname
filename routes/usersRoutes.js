'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');

// User routes at /api/users/
router.get('/', controller.getAllUsers);
router.post('/', controller.addUser);

module.exports = {
    router
}