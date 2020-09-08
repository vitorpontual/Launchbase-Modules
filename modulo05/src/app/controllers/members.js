const { age, date } = require("../../lib/utils")


module.exportes = {
   index(req, res){
      return res.render('members/index', {members : data.memberss})
   },
   create(req, res){
      return res.render('members/create')
   },
   post(req, res){

      const keys = Object.keys(req.body)

      for( key in keys ) {
	 if(req.body[key] == '') {
	    return res.send('Please, fill all fields')
	 }
      }


      return

   },
   show(req, res){
     
      return

   },

   edit(req, res){
     
      return
   },
   put(req, res){

      const keys = Object.keys(req.body)

      for(key of keys){
	 if(req.body[key] == ''){
	    return res.send('Please, fill all fields')
	 }
      }
   },

   delete(req, res){
      return
   },
}
