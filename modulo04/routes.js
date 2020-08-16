const express = require('express')
const instructors = require('./instructors')
const app = express.Router()

app.get("/", (req, res) => {
   return res.redirect('/instructors')
})

app.get("/instructors", (req, res) => {
   return res.render("instructors/index")
})

app.get("/instructors/create", (req, res) => {
   return res.render("instructors/create")
})

app.get("/instructors/:id", instructors.show)

app.post("/instructors", instructors.post)

app.get("/members", (req, res) => {
   return res.send("Members")
})

module.exports = app
