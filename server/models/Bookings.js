import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const BookingSchema = new mongoose.Schema(
    {   
        user: {
            type: ObjectId,
            ref: "User",
        },
        car: {
            type: ObjectId,
            ref: "Car",
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
    },
    {timestamps: true}
)
const Booking = mongoose.model("Booking", BookingSchema);
export default Booking;