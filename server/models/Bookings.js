import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const BookingSchema = new mongoose.Schema(
    {   
        user_id : {
            type: ObjectId,
            ref: "User",
            required: true
        },
        car: {
            type: ObjectId,
            ref: "Car",
            required: true
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