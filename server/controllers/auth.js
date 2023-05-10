import mongoose from "mongoose";
import User from "../models/Users.js";
import bcrypt from "bcryptjs"
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

export const signin=async (req,res,next)=>{
    try{
        const user =await User.findOne({name:req.body.name})
        if(!user) return next(createError(404,"User not found!"))

        const isCorrect =await bcrypt.compare(req.body.Password,user.Password )
        if(!isCorrect) return next(createError(400,"Wrong Password"))

        const token =jwt.sign({id:user._id},process.env.JWT)
        const {Password, ...others}=user._doc;
        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json(others);
    }catch (err){
        next(err)
    }
};
export const signup=async (req,res,next)=>{
    try{
        const salt =bcrypt.genSaltSync(10);
        const hash =bcrypt.hashSync(req.body.Password, salt);
        const newUser =new User({...req.body, Password:hash});

        await newUser.save();
        res.status(200).send("User Created");
    }catch (err){
        next(err)
    }
};