const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
        require: [true, "post id is required for creating a like"]
    },
    userId: {
        type: String,
        require: [true, "username id required for creating a like"]
    }

}, {
    timestamps: true
})

likeSchema.index({post:1, user:1,}, {unique:true})

const likeModel = mongoose.model("likes", likeSchema)

module.exports = likeModel
