import mongoose from "mongoose";
const UserSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
    img:{
        type:String,
    },
    subscribers:{
        type:Number,
        default:0
    },
    subscribedUsers:{
        type:[String]
    }
    
},{timestamps:true});

export default mongoose.model("User",UserSchema);