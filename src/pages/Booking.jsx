
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./../css/Booking.css";

function Booking() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [duration, setDuration] = useState(1);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const selectedSlot = state;

    if (!selectedSlot) {
        return (
            <main className="booking-page">
                <div className="booking-empty">
                    <h1>No Parking Slot Selected</h1>
                    <p>Please select a parking slot first.</p>

                    <Link to="/find-parking" className="back-parking-btn">
                        Find Parking
                    </Link>
                </div>
            </main>
        );
    }

    const total = selectedSlot.price * duration;

    // Create Booking
    const handleBooking = async (e) => {
        e.preventDefault();
        setMessage("");

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user || !user.id) {
            alert("Please login before booking.");
            navigate("/login");
            return;
        }

        if (!selectedSlot.parkingId) {
            setMessage("Parking ID missing. Please select a slot again.");
            return;
        }

        // Convert vehicle name according to Backend enum
        const vehicleTypes = {
            bike: "Bike",
            car: "Car",
            suv: "SUV"
        };

        const bookingData = {
            userId: user.id,
            parkingId: selectedSlot.parkingId,
            slotId: selectedSlot.slotId,
            vehicle: vehicleTypes[selectedSlot.vehicle.toLowerCase()],
            date,
            time,
            duration
        };

        if (!bookingData.vehicle) {
            setMessage("Invalid vehicle type.");
            return;
        }

        try {
            setLoading(true);

            console.log("Booking Data:", bookingData);

            const response = await fetch(
                "http://localhost:5000/api/bookings",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(bookingData)
                }
            );

            const data = await response.json();

            if (!response.ok) {
                console.log("Backend Error:", data);

                throw new Error(
                    data.error || data.message || "Booking failed."
                );
            }

            alert("Booking Confirmed!");

            navigate("/my-bookings");

        } catch (error) {
            console.error("Booking Error:", error);
            setMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="booking-page">

            {/* Header */}
            <section className="booking-header">

                <span className="section-badge">
                    ✦ Parking Booking
                </span>

                <h1>
                    Complete Your <strong>Booking</strong>
                </h1>

                <p>
                    Enter your date, time and parking duration.
                </p>

            </section>

            {/* Booking Container */}
            <section className="booking-container">

                {/* Selected Slot */}
                <div className="booking-summary">

                    <span className="booking-summary-badge">
                        ✓ Selected Parking
                    </span>

                    <h2>{selectedSlot.areaName}</h2>

                    <p>📍 {selectedSlot.location}</p>

                    <div className="booking-details">

                        <div>
                            <small>Slot</small>
                            <strong>🅿️ {selectedSlot.slotId}</strong>
                        </div>

                        <div>
                            <small>Vehicle</small>
                            <strong>{selectedSlot.vehicle}</strong>
                        </div>

                        <div>
                            <small>Price</small>
                            <strong>₹{selectedSlot.price}/hr</strong>
                        </div>

                    </div>

                </div>

                {/* Booking Form */}
                <form className="booking-form" onSubmit={handleBooking}>

                    <h2>Booking Details</h2>

                    <div className="booking-field">

                        <label>Date</label>

                        <input
                            type="date"
                            value={date}
                            min={new Date().toLocaleDateString("en-CA")}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />

                    </div>

                    <div className="booking-field">

                        <label>Start Time</label>

                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        />

                    </div>

                    <div className="booking-field">

                        <label>Duration</label>

                        <select
                            value={duration}
                            onChange={(e) =>
                                setDuration(Number(e.target.value))
                            }
                        >
                            <option value="1">1 Hour</option>
                            <option value="2">2 Hours</option>
                            <option value="3">3 Hours</option>
                            <option value="4">4 Hours</option>
                            <option value="5">5 Hours</option>
                            <option value="6">6 Hours</option>
                        </select>

                    </div>

                    <div className="booking-total">

                        <span>Total Amount</span>

                        <strong>₹{total}</strong>

                    </div>

                    {message && <p>{message}</p>}

                    <div className="booking-actions">

                        <Link
                            to="/find-parking"
                            className="cancel-booking-btn"
                        >
                            ← Back
                        </Link>

                        <button
                            type="submit"
                            className="confirm-booking-btn"
                            disabled={loading}
                        >
                            {loading
                                ? "Processing..."
                                : "Confirm Booking →"
                            }
                        </button>

                    </div>

                </form>

            </section>

        </main>
    );
}

export default Booking;
