const express = require('express')
const routes = express.Router()

const SessionController = require('../app/controllers/SessionController.js')
const UserController = require('../app/controllers/UserController.js')
const Validator = require('../app/validators/user.js')

// login/logout
//routes.get('/login', SessionController.loginForm)
//routes.post('/login', SessionController.login)
//routes.post('/logout', SessionController.logout)
// reset password / forgot
//routes.get('/forget-password', SessionController.forgotForm)
//routes.get('/reset-password', SessionController.resetForm)
//routes.post('/forpost-password', SessionController.forgot)
//routes.post('/reset-password', SessionController.reset)

// user register
routes.get('/register', UserController.registerForm)
routes.post('/register',Validator.post, UserController.post)
//
//routes.get('/', UserController.show)
//routes.put('/', UserController.put)
//routes.delete('/', UserController.delete)


module.exports = routes
