const knex = require('knex')
const {options} = require("../../config/options")

class Chat{

    constructor(){
        this.nameTable = "chat"
        this.database = knex(options)
    }

    async getAll(){
        try{
            const data = await this.database.from(this.nameTable).select("*")
            return data
            
        } catch (error) {
            console.log(error)
        }
    }

    async save(data){
        try {

            const message={}

            message.email=data.email
            message.text=data.text

            await this.database.from(this.nameTable).insert(message)

        } catch (error) {
            console.log(error);
        }
    }

}

module.exports=Chat