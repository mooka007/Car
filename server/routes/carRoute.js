import express from "express";
import {  getCars, getCar, createPost } from "../controller/carsControll.js";
import requireAuth from "../middleware/require.js"
import { upload } from "../middleware/upload.js";
const router = express.Router();
//get all cars

router.post("/create", upload, requireAuth, createPost)

router.get("/", getCars)
router.get('/car/:id', getCar)

export default router;