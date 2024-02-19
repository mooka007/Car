
import express from "express";
import { bookingController } from "../controller/bookingControll.js"
import requireAuth from "../middleware/require.js"

const router = express.Router();

// Create a new booking
router.post('/bookings',requireAuth, bookingController.createBooking);

// Get all bookings
// router.get('/bookings', bookingController.getAllBookings);

// Get a specific booking by ID
// router.get('/bookings/:id', bookingController.getBookingById);

// Update a booking
// router.put('/bookings/:id', bookingController.updateBooking);

// Delete a booking
// router.delete('/bookings/:id', bookingController.deleteBooking);

module.exports = router;