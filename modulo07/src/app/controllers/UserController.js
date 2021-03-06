const User = require('../models/User')
const { formatCep, formatCpfCnpj } = require('../../lib/utils')

module.exports = {
   registerForm(req, res){
      return res.render('users/register')
   },
   async post(req, res){

      const userId = await User.create(req.body)


      req.session.userId = userId



      return res.redirect('/users')
   },
   show(req, res){
      const { user } = req

      user.cpf_cnpj = formatCpfCnpj(user.cpf_cnpj)
      user.cep = formatCep(user.cep)

      return res.render('users/index', { user })
   },
   async put(req, res){
      try{
	 const { user } = req
	 let { name, email, cpf_cnpj, cep, address } = req.body

	 cpf_cnpj = cpf_cnpj.replace(/\D/g, '')
	 cep = cep.replace(/\D/g, '')

	 await User.update(user.id, {
	    name,
	    email,
	    cpf_cnpj,
	    cep,
	    address,
	 })

	 return res.render('users/index', {
	    user: req.body,
	    sucess: 'Conta atualizada com sucecsso.'
	 })
      }catch(err){
	 console.log(err)
	 return res.render('users/index', {
	    error: "Algum erro aconteceu!"
	 })
      }
   },
   async delete(req, res){
      try{
	 await User.delete(req.body.id)
	 await req.session.destroy()

	 return res.render("session/login", {
	    sucess:"Account Deleted"
	 })

      }catch(err){
	 console.error(err)
	 return res.render("users/index", {
	    user: req.body,
	    error: "Error ao tentar deletar sua conta!"
	 })
      }
   }
}

