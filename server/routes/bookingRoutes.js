
const express = require("express");

const {
    createBooking,
    getMyBookings,
    cancelBooking
} = require("../controllers/bookingController");

const router = express.Router();

router.post("/", createBooking);

router.get("/my-bookings/:userId", getMyBookings);

router.put("/cancel/:bookingId", cancelBooking);

module.exports = router;
