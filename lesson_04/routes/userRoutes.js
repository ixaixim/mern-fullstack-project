const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.route('/')
    .get(usersController.getAllUsers) // get all users
    .post(usersController.createNewUser) // create a new user
    .patch(usersController.updateUser) // update a user
    .delete(usersController.deleteUser) // delete a user

module.exports = router