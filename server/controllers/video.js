import {createError} from "../error.js";
import Users from "../models/Users.js";
import Video from "../models/Video.js";

export const addVideo=async(req,res,next)=>{
    const newVideo= new Video({userId:req.user.id, ...req.body});
    try{
        const savedVideo =await newVideo.save()
        res.status(200).json(savedVideo)
    }catch (err){
        next(err);
    };
};
export const updateVideo=async(req,res,next)=>{
    try{
        const video =await Video.findById(req.params.id);
        if(!video) return next(404,"Video not found");
        if (req.user.id===video.userId){
            const updatedVideo =await Video.findByIdUpdate(
                req.params.id,
                {$set:req.body,
                },{new:true}
            );
            res.status(200).json(updatedVideo)
        }else{
            return next(createError(403,"you can update only your video"))
        }
    }catch(err){
        next(err);
    }
};
export const deleteVideo=async(req,res,next)=>{
    try{
        const video =await Video.findById(req.params.id);
        if(!video) return next(404,"Video not found")
        if (req.user.id===video.userId){
            await Video.findByIdAndDelete(
                req.params.id,
            );
            res.status(200).json(updatedVideo)
        }else{
            return next(createError(403,"you can delete only your video"))
        }
    }catch(err){
        next(err);
    }
};
export const getVideo=async(req,res,next)=>{
    try{    
        const video=await Video.findById(re.params.id);
        res.status(200).json(find)
    }catch(err){
        next(err);
    }
};
export const trend=async(req,res,next)=>{
    try{    
        const videos=await Video.find().sort({views:-1});
        res.status(200).json(videos)
    }catch(err){
        next(err);
    };
};
export const random=async(req,res,next)=>{
    try{    
        const videos=await Video.aggregate([{$sample:{size:40}}]);
        res.status(200).json(videos)
    }catch(err){
        next(err);
    };
};
export const sub=async(req,res,next)=>{
    try{    
        const user =await Users.findById(req.user.id);
        const subscribedChannels=user.subscribedUsers;
        const list =await Promise.all(
            subscribedChannels.map((channelId)=>{
                return Video.find({userId:channelId});
            })
        );
        res.status(200).json(list.flat().sort((a,b)=> b.createdAt -a.createdAt));
    }catch(err){
        next(err);
    };
};
export const addview=async(req,res,next)=>{
    try{    
        await Video.findByIdAndUpdate(re.params.id,{
            $inc:{views:1}
        })
        res.status(200).json("Views Updated")
    }catch(err){
        next(err);
    };
};
export const getByTags=async(req,res,next)=>{
    const tags=req.query.tags.split(",")
    console.log(tags)
    try{
        const videos=await Video.find({tags:{$in:tags}}).limit(20);
        res.status(200).json(videos);
    }catch(err){
        next(err);
    };
};
export const Search=async(req,res,next)=>{
    const query=req.query.q
    try{
        const videos=await Video.find({
            title:{$regex:query,$options:"i"},
        }).limit(40);   
    res.status(200).json(videos)
    }catch(err){
        next(err);
    };
};
