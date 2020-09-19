const { age, date } = require("../../lib/utils")
const Member = require('../models/member')

module.exports = {
   index(req, res){

      Member.all(function(members){
	 return res.render('members/index', {members})
      })
   },
   create(req, res){

      Member.instructorSelectOptions(function(options){

	 return res.render('members/create', {instructorOption: options})
      })
   },
   post(req, res){

      const keys = Object.keys(req.body)

      for( key in keys ) {
	 if(req.body[key] == '') {
	    return res.send('Please, fill all fields')
	 }
      }

      Member.create(req.body, function(member){
	 return res.redirect(`/members/${member.id}`)
      })


   },
   show(req, res){
      Member.find(req.params.id, function(member){
	 if(!member) return res.send('Member not found')

	 member.birth = date(member.birth).birthDay


	 console.log(member)
	 return res.render('members/show', {member})
      })
     
   },

   edit(req, res){
      Member.find(req.params.id, function(member){
	 if(!member) return res.send('Member not found')

	 member.birth = date(member.birth).iso

	 console.log(member)
	 return res.render('members/edit', {member})
      })
   },
   put(req, res){

      const keys= Object.keys(req.body)

      for(key of keys){
	 if(req.body[key] == ''){
	    return res.send('Please, fill all fields')
	 }
      }

      Member.update(req.body, function(){
	 console.log(req.body)
	 return res.redirect(`/members/${req.body.id}`)
      })

   },
   delete(req, res){
      Member.delete(req.body.id, function(){
	 return res.redirect(`/members/`)
      })

   },
}
