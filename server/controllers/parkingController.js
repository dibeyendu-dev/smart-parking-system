const Parking = require("../models/Parking");

// Create Parking
const createParking = async (req, res) => {
    try {
        const existingParking = await Parking.findOne({
            name: "City Mall Parking"
        });

        if (existingParking) {
            return res.status(400).json({
                message: "Parking already exists"
            });
        }

        const parking = await Parking.create({
            name: "City Mall Parking",
            location: "City Mall, Kolkata",
            pricing: {
                bike: 20,
                car: 40,
                suv: 60
            },
            slots: [
                { slotId: "A1" },
                { slotId: "A2" },
                { slotId: "A3" },
                { slotId: "A4" },
                { slotId: "B1" },
                { slotId: "B2" },
                { slotId: "B3" },
                { slotId: "B4" },
                { slotId: "C1" },
                { slotId: "C2" },
                { slotId: "C3" },
                { slotId: "C4" }
            ]
        });

        res.status(201).json({
            message: "Parking created successfully",
            parking
        });
    } catch (error) {
        res.status(500).json({
            message: "Parking creation failed",
            error: error.message
        });
    }
};

// Get Parking
const getParking = async (req, res) => {
    try {
        const parking = await Parking.findOne({
            name: "City Mall Parking"
        });

        if (!parking) {
            return res.status(404).json({
                message: "Parking not found"
            });
        }

        res.status(200).json(parking);
    } catch (error) {
        res.status(500).json({
            message: "Failed to get parking",
            error: error.message
        });
    }
};

module.exports = {
    createParking,
    getParking
};