const LoadProductService = require('../services/LoadProductService')

const Product = require('../models/Product')

module.exports = {
   async index(request, response){
      try{

	 let params = {}

	 const { filter, category } = request.query

	 if(!filter) return response.redirect('/')

	 params.filter = filter

	 if (category) {
	    params.category = category
	 }

	 let products = await Product.search(params)

	 const productsPromise = products.map(LoadProductService.format)


	 products = await Promise.all(productsPromise)

	 const search = {
	    term: request.query.filter,
	    total: products.length
	 }


	 const categories = products.map(product => ({
	    id: product.category_id,
	    name: product.category_name
	 })).reduce((categoriesFiltered, category) => {

	    const found = categoriesFiltered.some(cat => cat.id == category.id)
	    if(!found)
	       categoriesFiltered.push(category)

	    return categoriesFiltered
	 }, [])


	 return response.render('search/index', {products, search, categories})
      } catch (err) {
	 console.error(err)
      }
   }
}
