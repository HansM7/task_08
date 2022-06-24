const Product = require('../product/model')
const newProduct = new Product()

const Chat = require('../chat/model')
const newChat = new Chat()

module.exports = (io) => {

    io.on('connection', (socket) => {

        const sendProducts = async()=>{
            const products = await newProduct.getAll()
            io.emit("allProductsServer", products)
            console.log(products);
        }
        sendProducts()

        socket.on('processAddProduct', async (data) => {
            console.log(data)

            sendProducts()
        })

        console.log('Un usuario se a conectado')

    })

}
