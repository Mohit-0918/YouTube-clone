import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/users.js"
import videoRoutes from "./routes/videos.js"
import commentRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser"

const app=express();
dotenv.config();

const connect = () => {
mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log("connected to mongo")
}).catch(err=>{console.log(`ServerSelectionError:${err.message} Retrying connection`);
setTimeout(connect, 5000);});
};

app.use(cookieParser())
app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/videos",videoRoutes)
app.use("/api/comments",commentRoutes)

app.use((err,req,res,next)=>{
    const status=err.status || 500;
    const message=err.message ||"somwthing went wrong";
    return res.status(status).json({
        success:false,
        status,
        message
    })
})
app.listen(5500,() => {
    connect()
    console.log("Connected")});