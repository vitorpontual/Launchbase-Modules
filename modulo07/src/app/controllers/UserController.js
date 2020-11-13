const User = require('../models/User')

module.exports = {
   registerForm(req, res){
      return res.render('users/register')
   },
   async post(req, res){
      const userId = await User.create(req.body)


      return res.redirect('/users')
   },
   async show(req, res){
      return res.send('ok, cadastrado')
   }
}

