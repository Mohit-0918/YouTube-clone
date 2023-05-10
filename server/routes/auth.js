import express from "express";
import { signin, signup } from "../controllers/auth.js";

const router=express.Router();
//CREATE A USER 
router.post("/signup",signup)

//create sign in
router.post("/signin",signin)

//Google authentication
router.post("/signin",)

export default router;