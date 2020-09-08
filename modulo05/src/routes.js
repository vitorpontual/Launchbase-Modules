const express = require('express')
const instructors = require('./app/controllers/instructors')
const members = require('./app/>controllers/members')
const app = express.Router()

app.get("/", (req, res) => {
   return res.redirect('/instructors')
})
app.get("/instructors", instructors.index)
app.get("/instructors/create", instructors.create)
app.get("/instructors/:id", instructors.show)
app.get("/instructors/:id/edit", instructors.edit)
app.post("/instructors", instructors.post)
app.put("/instructors", instructors.put)
app.delete("/instructors", instructors.delete)

app.get("/members",members.index)
app.get("/members/create", members.create)
app.get("/members/:id", members.show)
app.get("/members/:id/edit", members.edit)
app.post("/members", members.post)
app.put("/members", members.put)
app.delete("/members", members.delete)

module.exports = app
