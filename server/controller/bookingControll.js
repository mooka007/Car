import Booking from "../models/Bookings.js.js";

// Create a new booking
exports.createBooking = async (req, res) => {
    try {
    const { user, car, startDate, endDate } = req.body;

    const booking = new Booking({
        user: user._id,
        car: car._id,
        startDate,
        endDate,
    });

    const savedBooking = await booking.save();

    res.status(201).json(savedBooking);
    } catch (error) {
    res.status(500).json({ error: 'Failed to create booking' });
    }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('user car');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve bookings' });
    }
};

// Get a specific booking by ID
exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id).populate('user car');
        if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
        }
        res.json(booking);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve booking' });
    }
};

// Update a booking
exports.updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
        }
        res.json(booking);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update booking' });
    }
};

// Delete a booking
exports.deleteBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndRemove(req.params.id);
        if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
        }
        res.json({ message: 'Booking deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete booking' });
    }
};