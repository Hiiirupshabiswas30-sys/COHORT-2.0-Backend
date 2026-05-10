const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const uplode = multer({Storage: multer.memoryStorage()})
const identifyUser = require("../middlewares/auth.middleware")

// @routes POST /api/posts {protected}
// @description create a post with image and caption. also save the image in cloudinary and save the url in database

postRouter.post("/",uplode.single("image"),identifyUser,postController.createPostController)

// @routes GET /api/posts {protected}
// @description get all the posts of the user that the request come from

postRouter.get("/",identifyUser,postController.getpostcController)

// @routes GET /api/posts/details/:postId
// @description return details about a specific post with the given ID. also check whether the post belongs to the user that the request come from

postRouter.get("/details/:postId",identifyUser,postController.getPostDetailsController)

//@routes post/api/post/like/:postid
//@description like a post with the given id. also check whether the post belongs to the user that the request come from

postRouter.post("/like/:postId",identifyUser,postController.likePostController)

module.exports = postRouter

