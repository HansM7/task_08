class Chat{

    constructor(messages=[]){
        this.messages = messages
    }
    async getAll(){
        try{
            return this.messages
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports=Chat