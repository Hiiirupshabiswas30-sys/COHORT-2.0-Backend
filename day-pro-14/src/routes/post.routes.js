const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const uplode = multer({Storage: multer.memoryStorage()})
const identifyUser = require("../middlewares/auth.middleware")

//post/api/posts {protected}
// - req.body = {caption,imag-file}

//api/posts/
postRouter.post("/",uplode.single("image"),identifyUser,postController.createPostController)

//Get/api/posts/ [protected]

postRouter.get("/",identifyUser,postController.getpostcController)

//Get/api/posts/details/:postId
//- return an detail about specific post with the id.also check whether the post belongs to the user that the request come from

postRouter.get("/details/:postId",identifyUser,postController.getPostDetailsController)


module.exports = postRouter

