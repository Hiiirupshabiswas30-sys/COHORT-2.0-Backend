const mongoose = require("mongoose");

const followSchema = new mongoose.Schema({
    follower:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        require: [true,"Follower is required"]
    },
    following:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        require: [true,"Following is required"]
    }
})

const followModel = mongoose.model("follows",followSchema)

module.exports = followModel