import Car from "../models/Cars.js";
import mongoose from "mongoose";

// get all posts
export  const getCars = async (req, res ) => {
    const cars = await Car.find({}).sort({createdAt : -1 })
    res.status(200).json(cars)
}

// get a single post
export const getCar = async( req, res ) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: 'No such Post' })
    }
    const car = await Car.findById(id)
    if (!car) {
        return res.status(404).json({ error: 'No such car' })
    }
    res.status(400).json(car)
}


// create post 
export const createPost = async (req, res) => {
    const { body } = req
    // const images =  req.files[0].filename;
    let emptyFields = []
    if (!body.name) {
        emptyFields.push('name')
    }
    if (!body.description) {
        emptyFields.push('description')
    }
    if (!body.model) {
        emptyFields.push('model')
    }
    if (!req.files[0].filename) {
        emptyFields.push('image')
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please Fill All The Fields', emptyFields })
    }
    // image
    const img = [];
    for (const file of req.files) {
        // console.log(file.path)
        const path = file.path.split("\\");
        // console.log(path)
        const imgPath = "/" + path[1] + "/" + path[2];
        console.log(imgPath)
        img.push(imgPath);
    }
    // console.log("image", img);
    try{
        const car = await Car.create({
            ...body,
            image: img,
            availability: false
        })
        res.status(200).json(car)
        // console.log(car)
    } catch (error){
        res.status(400).json({ error: error.message })
    }
}