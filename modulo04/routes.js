const express = require('express')
const routes = express.Router()
const instructor = require('./instructors')

routes.get('/',(req, res) => {
   return res.redirect('/instructors')
})

routes.get('/instructors', instructor.index)

routes.get('/instructors/create', (req, res) => {
   return res.render('instructors/create')
})

routes.get('/instructors/:id', instructor.show)

routes.post('/instructors', instructor.post)

routes.get('/members',(req, res) => {
   return res.send('member')
})

module.exports = routes
