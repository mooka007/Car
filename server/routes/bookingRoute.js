
import express from "express";
import { createBooking } from "../controller/bookingControll.js"
import requireAuth from "../middleware/require.js"

const router = express.Router();
router.use(requireAuth)
// Create a new booking
router.post('/booking', createBooking);

// Get all bookings
// router.get('/bookings', bookingController.getAllBookings);

// Get a specific booking by ID
// router.get('/bookings/:id', bookingController.getBookingById);

// Update a booking
// router.put('/bookings/:id', bookingController.updateBooking);

// Delete a booking
// router.delete('/bookings/:id', bookingController.deleteBooking);


export default router;