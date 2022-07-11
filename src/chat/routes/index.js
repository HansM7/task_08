const express = require("express")
const {getAllController, registerController} = require("../controllers/")
const register = require("../middlewares")

const {options} = require("../../config/options");
const routes = require("../../product/routes");
const knex = require("knex")(options);


const router = express.Router()

router.get('/messages', getAllController)

router.post('/message', registerController)


module.exports={
    routerChat: router
}