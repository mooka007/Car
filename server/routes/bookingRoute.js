
import express from "express";
import { createBooking, getAllBookings } from "../controller/bookingControll.js"
import requireAuth from "../middleware/require.js"

const router = express.Router();
// router.use(requireAuth)
// Create a new booking
router.post('/gallery', requireAuth, createBooking);

// Get all bookings
router.get('/',requireAuth,  getAllBookings);

// Get a specific booking by ID
// router.get('/bookings/:id', bookingController.getBookingById);

// Update a booking
// router.put('/bookings/:id', bookingController.updateBooking);

// Delete a booking
// router.delete('/bookings/:id', bookingController.deleteBooking);


export default router;