const express = require('express')
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const authRouter = express.Router()

// api/auth/register

authRouter.post("/register", async(req,res)=>{
    const {name,email,password} = req.body

    const isUserAlreadyExists = await userModel.findOne({ email })
    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"User already exist with this email address"
        })

    }

   const user = await userModel.create({
           email,password,name
    })

    const token =jwt.sign(
       {
        id: user._id,
        email: user.email
       },
       process.env.JWT_SECRET
    )

    res.cookie("JWT_token", token)

    res.status(201).json({
        message: "user registered successfully",
        user,
        token

    })
})

module.exports = authRouter