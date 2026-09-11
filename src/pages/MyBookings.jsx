import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../css/MyBookings.css";

function MyBookings() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const savedBookings =
            JSON.parse(localStorage.getItem("bookings")) || [];

        setBookings(savedBookings);
    }, []);

    return (
        <main className="my-bookings-page">
            {/* Header */}
            <section className="my-bookings-header">
                <span className="section-badge">✦ My Bookings</span>
                <h1>
                    Your <strong>Parking Bookings</strong>
                </h1>
                <p>View your parking booking details here.</p>
            </section>

            {/* Bookings */}
            <section className="bookings-container">
                {bookings.length === 0 ? (
                    <div className="no-booking">
                        <h2>No Booking Found</h2>
                        <p>You have not booked a parking slot yet.</p>

                        <Link to="/find-parking">
                            Find Parking
                        </Link>
                    </div>
                ) : (
                    bookings.map((booking) => (
                        <div className="booking-card" key={booking.id}>
                            <div className="booking-card-header">
                                <div>
                                    <h2>{booking.areaName}</h2>
                                    <p>📍 {booking.location}</p>
                                </div>

                                <span className="booking-status">
                                    ✓ {booking.status}
                                </span>
                            </div>

                            <div className="booking-info">
                                <div>
                                    <small>Parking Slot</small>
                                    <strong>🅿️ {booking.slotId}</strong>
                                </div>

                                <div>
                                    <small>Vehicle</small>
                                    <strong>{booking.vehicle}</strong>
                                </div>

                                <div>
                                    <small>Date</small>
                                    <strong>{booking.date}</strong>
                                </div>

                                <div>
                                    <small>Start Time</small>
                                    <strong>{booking.time}</strong>
                                </div>

                                <div>
                                    <small>Duration</small>
                                    <strong>{booking.duration} Hour</strong>
                                </div>

                                <div>
                                    <small>Total Amount</small>
                                    <strong>₹{booking.total}</strong>
                                </div>
                            </div>

                            <Link
                                to="/find-parking"
                                className="new-booking-btn"
                            >
                                Book Another Slot →
                            </Link>
                        </div>
                    ))
                )}
            </section>
        </main>
    );
}

export default MyBookings;