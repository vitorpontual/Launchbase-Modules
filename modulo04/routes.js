const express = require('express')
const app = express.Router()

app.get("/", (req, res) => {
   return res.redirect('/instructors')
})

app.get("/instructors", (req, res) => {
   return res.render("instructors/index")
})

app.get("/members", (req, res) => {
   return res.send("Members")
})

module.exports = app
