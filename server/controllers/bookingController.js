
const Booking = require("../models/Booking");
const Parking = require("../models/Parking");

// Create Booking
const createBooking = async (req, res) => {
    try {
        const {
            userId,
            parkingId,
            slotId,
            vehicle,
            date,
            time,
            duration
        } = req.body;

        const parking = await Parking.findById(parkingId);

        if (!parking) {
            return res.status(404).json({
                message: "Parking not found"
            });
        }

        const slot = parking.slots.find(
            (item) => item.slotId === slotId
        );

        if (!slot) {
            return res.status(404).json({
                message: "Parking slot not found"
            });
        }

        if (slot.status === "Occupied") {
            return res.status(400).json({
                message: "Parking slot is already occupied"
            });
        }

        const price = parking.pricing[vehicle.toLowerCase()];

        if (!price) {
            return res.status(400).json({
                message: "Invalid vehicle type"
            });
        }

        const total = price * Number(duration);

        const booking = await Booking.create({
            userId,
            parkingId,
            slotId,
            vehicle,
            price,
            date,
            time,
            duration,
            total
        });

        slot.status = "Occupied";
        await parking.save();

        res.status(201).json({
            message: "Booking created successfully",
            booking
        });

    } catch (error) {
        console.log("Booking Error:", error);

        res.status(500).json({
            message: "Booking failed",
            error: error.message
        });
    }
};

// Get User Bookings
const getMyBookings = async (req, res) => {
    try {
        const { userId } = req.params;

        const bookings = await Booking.find({ userId })
            .populate("parkingId", "name location")
            .sort({ createdAt: -1 });

        res.status(200).json({
            message: "Bookings fetched successfully",
            bookings
        });

    } catch (error) {
        console.log("Booking Error:", error);

        res.status(500).json({
            message: "Failed to fetch bookings",
            error: error.message
        });
    }
};

// Cancel Booking
const cancelBooking = async (req, res) => {
    try {
        const { bookingId } = req.params;
        const { userId } = req.body;

        const booking = await Booking.findOne({
            _id: bookingId,
            userId: userId
        });

        if (!booking) {
            return res.status(404).json({
                message: "Booking not found"
            });
        }

        if (booking.status === "Cancelled") {
            return res.status(400).json({
                message: "Booking is already cancelled"
            });
        }

        // Find parking area
        const parking = await Parking.findById(
            booking.parkingId
        );

        if (!parking) {
            return res.status(404).json({
                message: "Parking not found"
            });
        }

        // Make slot available again
        const slot = parking.slots.find(
            (item) => item.slotId === booking.slotId
        );

        if (slot) {
            slot.status = "Available";
            await parking.save();
        }

        // Update booking status
        booking.status = "Cancelled";
        await booking.save();

        res.status(200).json({
            message: "Booking cancelled successfully",
            booking
        });

    } catch (error) {
        console.log("Cancel Booking Error:", error);

        res.status(500).json({
            message: "Failed to cancel booking",
            error: error.message
        });
    }
};

module.exports = {
    createBooking,
    getMyBookings,
    cancelBooking
};
