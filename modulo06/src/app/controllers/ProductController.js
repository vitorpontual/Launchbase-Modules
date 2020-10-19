const Category = require('../models/Category.js')
const Product = require('../models/Product.js')


module.exports = {

   index(req, res){
      return
   },
   create(req, res) {
      //Pegar Categorias
      Category.all().then(function(results){

	    const categories = results.rows

	    return res.render('products/create', { categories })
	 }).catch(function(err) {
	    throw new Error(err)
	 })
   },

   async post(req, res) {
      const keys = Object.keys(req.body)

      for (key of keys ){
	 if (req.body[key] == '') {
	    return res.send('Please, fill all fields!')
	 }
      }

      let results = await Product.create(req.body)
      const idd = results.rows[0].id

      
      results = await Category.all()
      const categories = results.rows

      console.log(idd)
      return res.render('products/create.njk', { idd , categories })

   }
}
