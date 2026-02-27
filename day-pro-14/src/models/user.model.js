const mongoose =  require("mongoose");
// const { Profiler } = require("react");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: [true,"User name already exists"],
        require: [true,"User name is requird"]
    },

    email:{
        type: String,
        type: String,
        unique: [true,"Email already exists"],
        require: [true,"Email is requird"]
    },

    password:{
        type: String,
        require: [true,"Password is required"]
    },

    bio: String,
    ProfileImage:{
        type: String,
        default:"https://ik.imagekit.io/wcfkcil5z/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.avif?updatedAt=1771688884694",
    }


})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel