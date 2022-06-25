const express = require("express")
const {getAllController, registerController} = require("../controllers/")
const register = require("../middlewares")

const router = express.Router()

router.get('/messages', getAllController)

router.post('/message', registerController)


module.exports={
    routerChat: router
}