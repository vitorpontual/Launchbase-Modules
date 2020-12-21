const db = require('../../config/db')
const Base = require('./Base')

Base.init({table: 'products'})


module.exports = {
   ...Base,
   async files(id) {
      try{
	 const results = await db.query(`
	    SELECT * FROM files WHERE product_id = $1
	 `,[id])

	 return results.rows
      }catch(err){
	 console.error(err)
      }

   },
   async search(params){
      try{
	 const { filter, category } = params

	 let query = "",
	    filterQuery = `WHERE`

	 if (category) {
	    filterQuery = `${filterQuery}
	    products.category_id = ${category}
	    AND
	    `
	 }

	 filterQuery = `
	    ${filterQuery} (
	    products.name ilike '%${filter}%'
	    OR products.description ilike '%${filter}%'
	 )`

	 // WHERE products.category_id = 1
	 // AND products.name ilike ...
	 // OR products.description ilike ...

	 query = `
	 SELECT products.*,  categories.name AS category_name
	 FROM products 
	 LEFT JOIN categories ON (categories.id = products.category_id)
	 ${filterQuery}
	 `
	 const results = await db.query(query)
	 return results.rows

      }catch(err){
	 console.error(err)
      }
   },
}
