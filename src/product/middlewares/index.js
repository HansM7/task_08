
const isId=(req,res,next)=>{
    const id = req.params.id
    if (isNaN(id)!=true) {
        next()
    }else{
        res.json({
            message:"Formato indefinido"
        })
    }
}

const register = (req, res, next)=>{
    
    const {title,price,thumbnail} = req.body.data

    if (title!=undefined && price!=undefined && thumbnail!=undefined) {
        if (title!="" && thumbnail !="" && price!=""){
            if (isNaN(title)===true && isNaN(thumbnail) ===true && isNaN(price)!=true) {
                res.json({
                    state:"success",
                    message:"Registro correcto"
                })
                next()
            }else{
                res.json({
                    state:"error",
                    message:"Campos no compatibles"
                })
            }
        }else{
            res.json({
                state:"error",
                message:"Campos incompletos"
            })
        }
    }else{
        res.json({
            state:"error",
            message:"Campos incompletos"
        })
    }
}

module.exports= {
    isId,
    register
}