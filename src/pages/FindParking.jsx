
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../css/FindParking.css";

function FindParking() {
    const [vehicleType, setVehicleType] = useState("");
    const [selectedSlot, setSelectedSlot] = useState(null);

    const [parkingArea, setParkingArea] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch parking data from MongoDB
    useEffect(() => {
        const fetchParking = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/parking"
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(
                        data.message || "Failed to load parking details"
                    );
                }

                setParkingArea(data.parking || data);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchParking();
    }, []);

    // Vehicle price from MongoDB
    const prices = parkingArea
        ? {
            bike: parkingArea.pricing.bike,
            car: parkingArea.pricing.car,
            suv: parkingArea.pricing.suv
        }
        : {
            bike: 20,
            car: 40,
            suv: 60
        };

    // Select parking slot
    function selectSlot(slot) {
        if (slot.status === "Occupied") {
            return;
        }

        if (!vehicleType) {
            alert("Please select vehicle type first.");
            return;
        }

        setSelectedSlot({
            parkingId: parkingArea._id,
            areaName: parkingArea.name,
            location: parkingArea.location,
            slotId: slot.slotId,
            vehicle: vehicleType,
            price: prices[vehicleType]
        });
    }

    // Loading state
    if (loading) {
        return (
            <main className="find-parking-page">
                <p>Loading parking details...</p>
            </main>
        );
    }

    // Error state
    if (error) {
        return (
            <main className="find-parking-page">
                <p>{error}</p>
            </main>
        );
    }

    // Parking not found
    if (!parkingArea) {
        return (
            <main className="find-parking-page">
                <p>Parking area not found.</p>
            </main>
        );
    }

    const availableSlots = parkingArea.slots.filter(
        (slot) => slot.status === "Available"
    ).length;

    return (
        <main className="find-parking-page">

            {/* Header */}
            <section className="find-parking-header">

                <span className="section-badge">
                    ✦ Find Parking
                </span>

                <h1>
                    Find Your <strong>Parking Spot</strong>
                </h1>

                <p>
                    Choose your vehicle type and available
                    parking slot to book your spot easily.
                </p>

            </section>

            {/* Search */}
            <section className="find-parking-search">

                {/* Location */}
                <div className="search-field">

                    <label>Location</label>

                    <div className="search-input">
                        <span>📍</span>

                        <input
                            type="text"
                            value={parkingArea.location}
                            readOnly
                        />
                    </div>

                </div>

                {/* Date */}
                <div className="search-field">

                    <label>Date</label>

                    <div className="search-input">
                        <span>📅</span>

                        <input type="date" />
                    </div>

                </div>

                {/* Vehicle */}
                <div className="search-field">

                    <label>Vehicle Type</label>

                    <div className="search-input">

                        <span>🚗</span>

                        <select
                            value={vehicleType}
                            onChange={(e) => {
                                setVehicleType(e.target.value);
                                setSelectedSlot(null);
                            }}
                        >

                            <option value="">
                                Select vehicle
                            </option>

                            <option value="bike">
                                🏍️ Bike — ₹{prices.bike}/hr
                            </option>

                            <option value="car">
                                🚗 Car — ₹{prices.car}/hr
                            </option>

                            <option value="suv">
                                🚙 SUV — ₹{prices.suv}/hr
                            </option>

                        </select>

                    </div>

                </div>

            </section>

            {/* Price */}
            <section className="vehicle-price-info">

                <h2>Parking Price</h2>

                <div className="price-options">

                    <div>
                        <span>🏍️</span>
                        <strong>Bike</strong>
                        <span>₹{prices.bike}/hr</span>
                    </div>

                    <div>
                        <span>🚗</span>
                        <strong>Car</strong>
                        <span>₹{prices.car}/hr</span>
                    </div>

                    <div>
                        <span>🚙</span>
                        <strong>SUV</strong>
                        <span>₹{prices.suv}/hr</span>
                    </div>

                </div>

            </section>

            {/* Parking Area */}
            <section className="parking-results">

                <div className="section-heading">

                    <span>
                        ✦ Available Parking
                    </span>

                    <h2>
                        Choose Your <strong>Parking Area</strong>
                    </h2>

                    <p>
                        Select an available parking slot from
                        {` ${parkingArea.name}.`}
                    </p>

                </div>

                <div className="parking-results-grid">

                    <div
                        className="parking-result-card"
                        key={parkingArea._id}
                    >

                        {/* Parking Header */}
                        <div className="parking-result-header">

                            <div>

                                <h3>
                                    {parkingArea.name}
                                </h3>

                                <p>
                                    📍 {parkingArea.location}
                                </p>

                            </div>

                            <span className="parking-rating">
                                ⭐ 4.9
                            </span>

                        </div>

                        {/* Availability */}
                        <div className="parking-availability">

                            <span>
                                🅿️ {availableSlots} Available
                            </span>

                            <span>
                                Total {parkingArea.slots.length} Slots
                            </span>

                        </div>

                        {/* Parking Slots */}
                        <div className="parking-slots">

                            {parkingArea.slots.map((slot) => {

                                const slotStatus =
                                    slot.status.toLowerCase();

                                return (
                                    <button
                                        key={slot.slotId}
                                        className={`
                                            parking-slot
                                            ${slotStatus}
                                            ${
                                                selectedSlot?.slotId === slot.slotId
                                                    ? "selected"
                                                    : ""
                                            }
                                        `}
                                        disabled={slot.status === "Occupied"}
                                        onClick={() => selectSlot(slot)}
                                    >

                                        <strong>
                                            {slot.slotId}
                                        </strong>

                                        <span>
                                            {slot.status}
                                        </span>

                                    </button>
                                );
                            })}

                        </div>

                        {/* Price */}
                        <div className="parking-result-price">

                            <small>
                                Price
                            </small>

                            <strong>

                                {vehicleType
                                    ? `₹${prices[vehicleType]}`
                                    : "Select Vehicle"
                                }

                                <span>
                                    /hr
                                </span>

                            </strong>

                        </div>

                    </div>

                </div>

            </section>

            {/* Selected Slot */}
            {selectedSlot && (

                <section className="selected-parking-section">

                    <div className="selected-parking-card">

                        <span className="selected-badge">
                            ✓ Slot Selected
                        </span>

                        <h2>
                            {selectedSlot.areaName}
                        </h2>

                        <p>
                            📍 {selectedSlot.location}
                        </p>

                        <div className="selected-details">

                            <div>

                                <small>
                                    Parking Slot
                                </small>

                                <strong>
                                    🅿️ {selectedSlot.slotId}
                                </strong>

                            </div>

                            <div>

                                <small>
                                    Vehicle
                                </small>

                                <strong>

                                    {selectedSlot.vehicle === "bike" && "🏍️"}
                                    {selectedSlot.vehicle === "car" && "🚗"}
                                    {selectedSlot.vehicle === "suv" && "🚙"}

                                    {" "}

                                    {selectedSlot.vehicle.toUpperCase()}

                                </strong>

                            </div>

                            <div>

                                <small>
                                    Price
                                </small>

                                <strong>
                                    ₹{selectedSlot.price}/hr
                                </strong>

                            </div>

                        </div>

                        <Link
                            to="/booking"
                            state={selectedSlot}
                            className="book-slot-btn"
                        >
                            Continue Booking →
                        </Link>

                    </div>

                </section>

            )}

        </main>
    );
}

export default FindParking;
