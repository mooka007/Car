import mongoose from "mongoose";

const CarsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        model: {
            type: String,
        },
        image: {
            type: Sequelize.ARRAY(Sequelize.STRING),
            defaultValue: ["no picture for this product"],
        },
        availability : Boolean,
    },
);

const Car = mongoose.model("Car", CarsSchema);
export default Car;