const Product = require('../product/model')
const newProduct = new Product()

const Chat = require('../chat/model')
const newChat = new Chat()


const fetch = require('node-fetch')

module.exports = (io) => {

    io.on('connection', (socket) => {

        // AL RECARGAR LA PAGINA NO CARGAN TODOS LOS DATOS 
        const sendProducts = async()=>{
            const products = await newProduct.getAll()
            socket.emit("allProductsServer", products)
            console.log(products)
        }
        sendProducts()

        // AL RECARGAR LA PAGINA NO CARGAN TODOS LOS DATOS 
        const sendMessages = async()=>{
            const messages = await newChat.getAll()
            socket.emit("allMessagesServer", messages)
            console.log(messages)
        }
        sendMessages()

        socket.on('processAddProduct', async (data) => {
            console.log(data)

            const data2 = await fetch("/productos")
            const newdata = await data2.json()

            io.emit("allProductsServer", newdata)

        })

        socket.on('processAddMessage', async (data) => {
            console.log(data)

            const data3 = await fetch("/messages")
            const newdata2 = await data3.json()

            console.log(newdata2)

            io.emit("allMessagesServer", newdata2)

        })

        console.log('Un usuario se a conectado')

    })

}
