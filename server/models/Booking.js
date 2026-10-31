const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        parkingId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Parking",
            required: true
        },
        slotId: {
            type: String,
            required: true
        },
        vehicle: {
            type: String,
            enum: ["Bike", "Car", "SUV"],
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ["Confirmed", "Cancelled"],
            default: "Confirmed"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Booking", bookingSchema);