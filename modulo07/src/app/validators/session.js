const User = require('../models/User')
const { compare } = require('bcryptjs')

async function login(req, res, next){
   const { email, password } = req.body


   const user = await User.findOne({where: {email}})

   if(!user) return res.render('session/login',{
      user: req.body,
      error: "Please, SignUp"
   })

   const passed = await compare(password, user.password)

   if(!passed) return res.render('session/login', {
      user: req.body,
      error: "Invalid Password"
   })

   req.user = user
   next()
}
async function put(req, res, next) {
   next()
}
module.exports = {
   login
}
