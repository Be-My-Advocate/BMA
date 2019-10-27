const express = require('express');
// Define the router using the express router
const userRouter = express.Router();

const userController = require('../controllers/user-controller')

userRouter.get('/', userController.authenticate)

userRouter.get('/email/:email', userController.authenticate);

userRouter.post('/', userController.addUser)

module.exports = userRouter
