const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
    caption:{
        type: String,
        default: ""
    },
    imgurl:{
        type:String,
        require: [true, "imagUrl is required for creating an post"]
    },  
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        require: [true, "user id is required for creating an post"]
    }
})

const postModel = mongoose.model("posts", postSchema)


module.exports = postModel 