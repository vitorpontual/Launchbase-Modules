const fs = require('fs')
const data = require('./data')
// create 

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
   const id = Number(data.instructors.length + 1)


   data.instructors.push({
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

   return res.redirect('/instructors')
   })

} 
