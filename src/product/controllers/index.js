const { response } = require('express')
const Product = require('../model/index')

const product=new Product()

exports.getAllController=async (req,res)=>{
    const allData = await product.getAll()
    res.json(allData)
}

exports.registerController= async (req, res)=>{
    const register = await product.save(req.body.data)
}