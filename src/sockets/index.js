const Product = require('../product/model')
const newProduct = new Product()

const Chat = require('../chat/model')
const newChat = new Chat()

// const axios = require('axios').default

const fetch = require('node-fetch')

module.exports = (io) => {

    io.on('connection', (socket) => {

        const sendProducts = async()=>{
            const products = await newProduct.getAll()
            io.emit("allProductsServer", products)
        }
        sendProducts()

        socket.on('processAddProduct', async (data) => {
            console.log(data)

            // const res = await axios('/productos');
            // io.emit("allProductsServer",res.json())
            // axios.get('/productos')
            // .then((response) => {  response.json() })
            // .then((data) => { io.emit("allProductsServer",data) })

            // io.emit("allProductsServer", [{
            //     title:"ejemplo",
            //     price:10,
            //     thumbnail:"ejemplo"
            // }])

            // const products = await newProduct.getAll()
            // io.emit("allProductsServer", products)
            // console.log(products)

            const data2 = await fetch("http://localhost:3000/productos")
            const newdata = await data2.json()

            io.emit("allProductsServer", newdata)

        })

        console.log('Un usuario se a conectado')

    })

}
