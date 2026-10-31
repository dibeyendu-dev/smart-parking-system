const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        pricing: {
            bike: {
                type: Number,
                default: 20
            },
            car: {
                type: Number,
                default: 40
            },
            suv: {
                type: Number,
                default: 60
            }
        },
        slots: [
            {
                slotId: {
                    type: String,
                    required: true
                },
                status: {
                    type: String,
                    enum: ["Available", "Occupied"],
                    default: "Available"
                }
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Parking", parkingSchema);