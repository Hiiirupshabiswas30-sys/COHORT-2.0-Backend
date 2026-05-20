const express = require('express')
const authController = require ("../controllers/auth.controller")
const identfyUser = require("../middlewares/auth.middleware")

const authRouter = express.Router()

//POST/api/auth/register


authRouter.post('/register', authController.registerController)

//post/api/auth/login

authRouter.post("/login", authController.loginController) 


//@route GET/api/auth/get-me
// @desc get the currently logged in user's info
// @access private

authRouter.get("/get-me", identfyUser, authController.getMeController)

module.exports = authRouter
