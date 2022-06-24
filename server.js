require('dotenv').config()

// Instanciamientos iniciales
const express = require('express')
const app = express()

const {routerProduct} = require('./src/product/routes/')
// const {routerOther} = require('./src/Others/routes/other.router')

// Instanciamiento del servidor de socket
const {Server}= require('socket.io')

const instanceSockets = require('./src/sockets')

// Instanciamiento del motor de plantilla
const handlebars = require('express-handlebars')

// Configuracion de los arhivos vista
app.set('views', './src/views')

app.engine('handlebars', handlebars.engine({
    extname: 'handlebars',
    defaultLayout: null
}))

app.set('views engine','handlebars')

app.use(express.static('./public'))

// Seteo de la data en json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', (req,res) => {
    res.render('index.handlebars')
}) 

app.use('/', routerProduct)

// app.use('/', routerProduct)
// app.use('/', routerOther)

const port = process.env.PORT || 3000
const myServer=app.listen(port)

const io=new Server(myServer)

// io.on('connection', (socket) => {
//     console.log('Un usuario se a conectado')

//     (async function(){
//         const products = await newProduct.getAll()
//         io.emit("allProductsServer", products)
//     })()

// })
instanceSockets(io)