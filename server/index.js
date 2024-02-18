import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import cors from "cors";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
// import path from "path";  // this one is comes with node module
// import { fileURLToPath } from "url";

import auth from "./routes/auth.js"
import carss from "./routes/carRoute.js"


// Configuration  { Middleware }
dotenv.config()
// const  __filename = fileURLToPath(import.meta.url);
// const  __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json({ limit : "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit : "30mb", extended: true }))
app.use(cors())
// app.use("/assets", express.static(path.join(__dirname, "public/assets")))


// Routes 
app.use("/auth", auth);
app.use("/cars", carss);



//  Mongosse Setup 
const PORT  = process.env.PORT  ;
mongoose.connect(process.env.MONGO_URL)
.then(()=> {
    console.log(`MongoDB Connected on ${PORT}`)
    app.listen(process.env.PORT, () => {
        console.log(`server is running on port ${process.env.PORT}`)
    })
})
.catch((err)=>console.error(err));

