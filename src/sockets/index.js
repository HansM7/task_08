const Product = require('../product/model')
const newProduct = new Product()

const Chat = require('../chat/model')
const newChat = new Chat()



const fetch = require('node-fetch')

module.exports = (io) => {

    io.on('connection', (socket) => {

        // AL RECARGAR LA PAGINA NO CARGAN TODOS LOS DATOS 
        const sendProducts = async()=>{
            // const products = await newProduct.getAll() no me funciona la llamada al modelo, no e recupera los datos
            const products = await fetch("http://localhost:3000/productos")
            const newProducts = await products.json()
            socket.emit("allProductsServer", newProducts)
        }
        sendProducts()

        // AL RECARGAR LA PAGINA NO CARGAN TODOS LOS DATOS 
        const sendMessages = async()=>{
            // const messages = await newChat.getAll() no me funciona la llamada al modelo, no e recupera los datos
            const messages = await fetch("http://localhost:3000/messages")
            const newMessages = await messages.json()

            socket.emit("allMessagesServer", newMessages)
        }
        sendMessages()

        socket.on('processAddProduct', async (data) => {
            console.log(data)

            const data2 = await fetch("http://localhost:3000/productos")
            const newdata = await data2.json()

            io.emit("allProductsServer", newdata)

        })

        socket.on('processAddMessage', async (data) => {
            console.log(data)

            const data3 = await fetch("http://localhost:3000/messages")
            const newdata2 = await data3.json()

            io.emit("allMessagesServer", newdata2)
            

        })

        console.log('Un usuario se a conectado')

    })

}
