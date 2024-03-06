import Booking from "../models/Bookings.js";
import Car from "../models/Cars.js"
import jwt from 'jsonwebtoken';

// import mongoose from "mongoose";

// Create a new booking
export const createBooking = async (req, res) => {
    const { body} = req
    try {
        const user_id = req.user._id
        console.log(user_id)
        const car = await Car.findOne({ name: body.selectedCar })
        if (!car) throw Error('Please Select A car')

        // Check if the car is already booked
        // if (!car.availability) {
        //     throw new Error('The selected car is not available');
        // }

        // Update the availability status of the car
        car.availability = false;
        await car.save();
        
        const booking = new Booking({
            ...body,
            user_id,
            car: car._id
        });
        const savedBooking = await booking.save();
        res.status(201).json(savedBooking);

    } catch (error) {
    res.status(500).json({ error: error.message  });
    }
};


// Get all bookings for authenticated user
export const getAllBookings = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET); 
        // Fetch bookings for the authenticated user
        const books = await Booking.find({ user_id: decodedToken }).sort({ createdAt: -1 })
            .populate("user_id")
            .populate("car", "_id name model");
        // console.log(books)
        res.status(200).json(books);
        } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
};

















// Get a specific booking by ID
// exports.getBookingById = async (req, res) => {
//     try {
//         const booking = await Booking.findById(req.params.id).populate('user car');
//         if (!booking) {
//         return res.status(404).json({ error: 'Booking not found' });
//         }
//         res.json(booking);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to retrieve booking' });
//     }
// };

// Update a booking
// exports.updateBooking = async (req, res) => {
//     try {
//         const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!booking) {
//         return res.status(404).json({ error: 'Booking not found' });
//         }
//         res.json(booking);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to update booking' });
//     }
// };

// // Delete a booking
// exports.deleteBooking = async (req, res) => {
//     try {
//         const booking = await Booking.findByIdAndRemove(req.params.id);
//         if (!booking) {
//         return res.status(404).json({ error: 'Booking not found' });
//         }
//         res.json({ message: 'Booking deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to delete booking' });
//     }
// };