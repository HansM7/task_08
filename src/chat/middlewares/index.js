const register = (req, res, next)=>{
    
    res.json({
        state:"success",
        message:"Registro correcto"
    })
    next()
}

module.exports= register
