const express = require("express");

const {
    createParking,
    getParking
} = require("../controllers/parkingController");

const router = express.Router();

router.post("/", createParking);
router.get("/", getParking);

module.exports = router;