const Category = require('../models/Category.js')
const Product = require('../models/Product.js')

const { formatPrice } = require('../../lib/utils.js')


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
      const productId = results.rows[0].id

      return res.redirect(`/product/${productsId}`)

   },

   async edit(req, res){
      let results = await Product.find(req.params.id)
      const product = results.rows[0]

      if(!product) return res.send('Product not found')

      product.old_price = formatPrice(product.old_price)
      product.price = formatPrice(product.price)

      results = await Category.all()
      const categories = results.rows


      return res.render('products/edit', { product, categories })
   }
}