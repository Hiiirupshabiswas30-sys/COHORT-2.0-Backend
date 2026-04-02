const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const uplode = multer({Storage: multer.memoryStorage()})

//post/api/posts {protected}
// - req.body = {caption,imag-file}

//api/posts/
postRouter.post("/",uplode.single("image"),postController.createPostController)

//Get/api/posts/ [protected]

postRouter.get("/",postController.getpostcController)

//Get/api/posts/details/:postId
//- return an detail about specific post with the id.also check whether the post belongs to the user that the request come from

postRouter.get("/details/:postId",postController.getPostDetailsController)


module.exports = postRouter

