import express from "express";
import {  getCars, getCar, createPost } from "../controller/carsControll.js";
import require from "../middleware/require.js"

const router = express.Router();
//get all cars

router.post("/create", require, createPost)

router.get("/", require, getCars)
router.get('/car/:id', getCar)