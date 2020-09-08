const { age, date } = require("../../lib/utils")



module.exportes = {
   index(req, res){
      return res.render('instructors/index', {instructors : data.instructors})
   },
   create(req, res){
      return res.render('instructors/create')
   },
   post(req, res){

      const keys = Object.keys(req.body)

      for( key in keys ) {
	 if(req.body[key] == '') {
	    return res.send('Please, fill all fields')
	 }
      }

      let { avatar_url, name, birth, gender, services } = req.body

      return

   },
   show(req, res){
     
      return

   },

   edit(req, res){
     
      return
   },
   put(req, res){

      const { id } = req.body
      let index = 0

      const foundInstructor = data.instructors.find((instructor, foundIndex) => {
	 if(id == instructor.id) {
	    index = foundIndex
	    return true
	 }
      })


	 if (!foundInstructor) return res.send(`Instructor not found`)

	 const instructor = {
	    ...foundInstructor,
	    ...req.body,
	    birth: Date.parse(req.body.birth),
	    id: Number(req.body.id)
	 }

	 data.instructors[index] = instructor

	 fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {if(err) return res.send(`Write file error!`)
		   
	    return res.redirect(`instructors/${id}`) 
	 })
   },
   delete(req, res){

      const { id } = req.body

      const filteredInstructors = data.instructors.filter(function(instructor){
	 return instructor.id != id
      })
      console.log(filteredInstructors)
       
      data.instructors = filteredInstructors

      fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => { if(err) return res.send('Write file error')

	 return res.redirect('/instructors')
      })
   },
}
