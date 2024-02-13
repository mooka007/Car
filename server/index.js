import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotevn from "dotenv";
import cors from "cors";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";  // this one is comes with node module
import { fileURLToPath } from "url";

// Configuration  { Middleware }
const  __filename = fileURLToPath(import.meta.url);
const  __dirname = path.dirname(__filename);
dotevn .config()
const app = express();
app.use(express.json());
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json({ limit : "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit : "30mb", extended: true }))
app.use(cors())
app.use("/assets", express.static(path.join(__dirname, "public/assets")))

//  file Storage
const storage = multer.diskStorage({    
    destination: (req ,file ,cb) =>{
        cb(null , "public/assets");
    },
    filename:(req ,file ,cb)=>{
        cb(null, file.originalname);
    }
})
const upload = multer({ storage})