import { useState } from "react";
import { Link } from "react-router-dom";
import "./../css/FindParking.css";

function FindParking() {
    const [vehicleType, setVehicleType] = useState("");
    const [selectedSlot, setSelectedSlot] = useState(null);

    // Vehicle price
    const prices = {
        bike: 20,
        car: 40,
        suv: 60
    };

    // Parking data
    const parkingArea = {
        id: 1,
        name: "City Mall Parking",
        location: "City Mall, Kolkata",
        rating: "4.9",
        slots: [
            { id: "A1", status: "available" },
            { id: "A2", status: "occupied" },
            { id: "A3", status: "available" },
            { id: "A4", status: "available" },
            { id: "B1", status: "occupied" },
            { id: "B2", status: "available" }
        ]
    };

    // Select parking slot
    function selectSlot(slot) {
        if (slot.status === "occupied") {
            return;
        }

        if (!vehicleType) {
            alert("Please select vehicle type first.");
            return;
        }

        setSelectedSlot({
            areaName: parkingArea.name,
            location: parkingArea.location,
            slotId: slot.id,
            vehicle: vehicleType,
            price: prices[vehicleType]
        });
    }

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
                            value="City Mall, Kolkata"
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
                                🏍️ Bike — ₹20/hr
                            </option>

                            <option value="car">
                                🚗 Car — ₹40/hr
                            </option>

                            <option value="suv">
                                🚙 SUV — ₹60/hr
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
                        <span>₹20/hr</span>
                    </div>

                    <div>
                        <span>🚗</span>
                        <strong>Car</strong>
                        <span>₹40/hr</span>
                    </div>

                    <div>
                        <span>🚙</span>
                        <strong>SUV</strong>
                        <span>₹60/hr</span>
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
                        City Mall Parking.
                    </p>

                </div>

                <div className="parking-results-grid">

                    <div
                        className="parking-result-card"
                        key={parkingArea.id}
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
                                ⭐ {parkingArea.rating}
                            </span>

                        </div>

                        {/* Availability */}
                        <div className="parking-availability">

                            <span>
                                🅿️ Available
                            </span>

                            <span>
                                Total {parkingArea.slots.length} Slots
                            </span>

                        </div>

                        {/* Parking Slots */}
                        <div className="parking-slots">

                            {parkingArea.slots.map((slot) => (

                                <button
                                    key={slot.id}
                                    className={`
                                        parking-slot
                                        ${slot.status}
                                        ${selectedSlot?.slotId === slot.id
                                            ? "selected"
                                            : ""
                                        }
                                    `}
                                    disabled={slot.status === "occupied"}
                                    onClick={() => selectSlot(slot)}
                                >

                                    <strong>
                                        {slot.id}
                                    </strong>

                                    <span>
                                        {slot.status === "occupied"
                                            ? "Occupied"
                                            : "Available"}
                                    </span>

                                </button>

                            ))}

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