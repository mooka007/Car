import mongoose from "mongoose";
import { Sequelize } from "sequelize";

const CarsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        image: {
            type: Sequelize.ARRAY(Sequelize.STRING),
            defaultValue: ["no picture for this product"],
        },
        availability: {
            type: Boolean,
            default: true,
        },
    },
);

const Car = mongoose.model("Car", CarsSchema);
export default Car;