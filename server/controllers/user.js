import { createError } from "../error.js"
import Users from "../models/Users.js";
import Video from "../models/Video.js";

export const update= async(req,res,next)=>{
if(req.params.id===req.user.id){
    try{
        const updatedUser =await Users.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{
            new:true
        });
        res.status(200).json(updatedUser)
    }catch(err){
        next(err);
    }
}else{
    return next(createError(403,"You can only update your account"))
}
};
export const deleteUser= async (req,res,next)=>{
    if(req.params.id===req.user.id){
        try{
            await Users.findByIdAndDelete(req.params.id,);
            res.status(200).json("User has been deleted")
        }catch(err){
            next(err);
        }
    }else{
        return next(createError(403,"You can only delete your account"))
    }
}
export const getUser= async(req,res,next)=>{
    try{
        const user =await Users.findById(req.params.id);
        res.status(200).json(user)
    }catch (err){
        next(err);
    }
}
export const subscribe= async(req,res,next)=>{
    try{
        await Users.findByIdAndUpdate(req.user.id,{
            $push:{subscribedUsers:req.params.id}
        });
        await Users.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:1},
        });
        res.status(200).json("Subsctiption Successfull")
    }catch (err){
        next(err);
    }
}
export const unsubscribe= async(req,res,next)=>{
    try{
        await Users.findByIdAndUpdate(req.users.id,{
            $pull:{subscribedUsers:req.params.id}
        });
        await Users.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:-1},
        });
        res.status(200),json("subscription Unseccessfull")
    }catch (err){
        next(err);
    }
}
export const like= async(req,res,next)=>{
    const id = req.user.id;
    const videoID=req.user.videoId;
    try{
        await Video.findByIdAndUpdate(videoID,
            {$addToSet:{likes:id},$pull:{dislikes:id}
        })
        res.status(200).json("The video has been liked")
    }catch (err){
        next(err);
    }
}
export const dislike= async(req,res,next)=>{
    const id = req.user.id;
    const videoID=req.user.videoId;
    try{
        await Video.findByIdAndUpdate(videoID,
            {$addToSet:{dislikelikes:id},$pull:{likes:id}
        })
        res.status(200).json("The video has been disliked")
    }catch (err){
        next(err);
    }
}