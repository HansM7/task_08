const knex = require('knex')
const {options} = require("../../config/options")


class Product{

    constructor(){
        this.nameTable = "producto"
        this.database = knex(options)
    }

    async save(product){
        try {
            
            const newProduct={}

            newProduct.title=product.title
            newProduct.price=parseInt(product.price)
            newProduct.thumbnail=product.thumbnail

            await this.database.from(this.nameTable).insert(newProduct)


        } catch (error) {
            console.log(error);
        }
    }

    async getAll(){
        try{
            const data = await this.database.from(this.nameTable).select("*")
            return data
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports=Product