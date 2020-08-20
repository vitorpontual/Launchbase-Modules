const fs = require('fs')
const data = require('../data')
const { age, date } = require("../utils")
const Intl = require("intl")

// index

exports.index = (req, res) => {
   return res.render('members/index', {members : data.members})
}

// create

exports.create = (req, res) => {
   return res.render('members/create')
}
//  post

exports.post = (req, res) => {

   const keys = Object.keys(req.body)

   for( key in keys ) {
      if(req.body[key] == '') {
	 return res.send('Please, fill all fields')
      }
   }

   let { avatar_url, name, birth, gender, services } = req.body

   birht = Date.parse(birth)
   const created_at = Date.now()
   const id = Number(data.members.length + 1)


   data.members.push({
      id,
      avatar_url,
      name,
      birth,
      gender,
      services,
      created_at
      
   })

   fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if(err) return res.send('Write File error!')

   return res.redirect('/members')
   })

} 

// show 
exports.show = (req, res) => {
   const { id } = req.params

   const foundMember = data.members.find((member) => {
      return member.id == id
   })

   if (!foundMember) return res.send('Member not found!')

   const member = {
      ...foundMember,
      age: age(foundMember.birth),
   }

   return res.render(`members/show`, {member})
}

// edit 

exports.edit = (req, res) => {

   const { id } = req.params

   const foundMember = data.members.find((member) => {
      return id == member.id
   })

   if(!foundMember) return res.send('Member not found')
   
   const member = {
      ...foundMember,
      birth: date(foundMember.birth)
   }
   return res.render(`members/edit`, {member})
}

// update

exports.put = (req, res) => {
   const { id } = req.body
   let index = 0

   const foundMember = data.members.find((member, foundIndex) => {
      if(id == member.id) {
	 index = foundIndex
	 return true
      }
   })


      if (!foundMember) return res.send(`Member not found`)

      const member = {
	 ...foundMember,
	 ...req.body,
	 birth: Date.parse(req.body.birth),
	 id: Number(req.body.id)
      }

      data.members[index] = member

      fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {if(err) return res.send(`Write file error!`)
		
	 return res.redirect(`members/${id}`) 
      })
   }

// Delete 

exports.delete = (req, res) => {
   const { id } = req.body

   const filteredMembers = data.members.filter(function(member){
      return member.id != id
   })
   console.log(filteredMembers)
    
   data.members = filteredMembers

   fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => { if(err) return res.send('Write file error')

      return res.redirect('/members')
   })
}
