class Chat{

    constructor(messages=[]){
        this.messages = [{
            email: 'example@example.com',
            date: '24-6-2022 19:18:49',
            text: 'Hola'
        }]
    }
    async getAll(){
        try{
            return this.messages
        } catch (error) {
            console.log(error)
        }
    }

    async save(data){
        try {

            const hoy = new Date();
            const ant_fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
            const hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
            const date = ant_fecha + ' ' + hora;

            const message={}

            message.email=data.email
            message.date=date
            message.text=data.text

            this.messages.push(message)

            return this.data

        } catch (error) {
            console.log(error);
        }
    }

}

module.exports=Chat