import express from "express";
import { Search, addVideo, addview, getByTags, getVideo, random, sub, trend } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";
const router=express.Router();

//create a video
router.post("/",verifyToken,addVideo)
router.put("/:id",verifyToken,addVideo)
router.delete("/:id",verifyToken,addVideo)
router.get("/find/:id",getVideo)
router.put("/view/:id",addview)
router.get("/trend",trend)
router.get("/random",random)
router.get("/sub",verifyToken,sub)
router.get("/tags",getByTags)
router.get("/search",Search)



export default router;