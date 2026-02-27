const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const uplode = multer({Storage: multer.memoryStorage()})

//post/api/posts {protected}
// - req.body = {caption,imag-file}

//api/posts/
postRouter.post("/",uplode.single("image"),postController.createPostController)

module.exports = postRouter

