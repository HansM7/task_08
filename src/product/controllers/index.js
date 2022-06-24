const Product = require('../model/index')

const product=new Product()

exports.getAllController=async (req,res)=>{
    const allData = await product.getAll()
    res.json(allData)
    // res.render('productos.ejs',{products:allData})
}

exports.registerController= async (req, res)=>{
    const register = await product.save(req.body.data)
    // const data = req.body.data
    // console.log(data)
    // const allData = await product.getAll()
    // res.render('productos.handlebars',{products:allData})
}