const Chat = require('../model/')

const chat=new Chat()

exports.getAllController=async (req,res)=>{
    const allData = await chat.getAll()
    res.json(allData)
}

exports.registerController= async (req, res)=>{
    const register = await chat.save(req.body.data)
    res.json(register)
}