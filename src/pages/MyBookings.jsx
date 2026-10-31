
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../css/MyBookings.css";

function MyBookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [cancellingId, setCancellingId] = useState(null);

    // Fetch bookings from MongoDB
    const fetchBookings = async () => {
        try {
            const user = JSON.parse(localStorage.getItem("user"));

            if (!user || !user.id) {
                setError("Please login to view your bookings.");
                return;
            }

            const response = await fetch(
                `http://localhost:5000/api/bookings/my-bookings/${user.id}`
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to load bookings.");
            }

            setBookings(data.bookings || []);
            setError("");

        } catch (error) {
            console.error("Fetch Bookings Error:", error);
            setError(error.message);

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    // Cancel Booking
    const handleCancelBooking = async (bookingId) => {
        const confirmCancel = window.confirm(
            "Are you sure you want to cancel this booking?"
        );

        if (!confirmCancel) return;

        try {
            const user = JSON.parse(localStorage.getItem("user"));

            if (!user || !user.id) {
                setError("Please login first.");
                return;
            }

            setCancellingId(bookingId);

            const response = await fetch(
                `http://localhost:5000/api/bookings/cancel/${bookingId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId: user.id
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Booking cancellation failed."
                );
            }

            alert("Booking Cancelled Successfully!");

            // Refresh bookings
            await fetchBookings();

        } catch (error) {
            console.error("Cancel Booking Error:", error);
            alert(error.message);

        } finally {
            setCancellingId(null);
        }
    };

    return (
        <main className="my-bookings-page">

            {/* Header */}
            <section className="my-bookings-header">

                <span className="section-badge">
                    ✦ My Bookings
                </span>

                <h1>
                    Your <strong>Parking Bookings</strong>
                </h1>

                <p>
                    View your parking booking details here.
                </p>

            </section>

            {/* Bookings */}
            <section className="bookings-container">

                {loading ? (

                    <div className="no-booking">
                        <h2>Loading Bookings...</h2>
                    </div>

                ) : error ? (

                    <div className="no-booking">
                        <h2>{error}</h2>

                        <Link to="/login">
                            Login Now
                        </Link>
                    </div>

                ) : bookings.length === 0 ? (

                    <div className="no-booking">

                        <h2>No Booking Found</h2>

                        <p>
                            You have not booked a parking slot yet.
                        </p>

                        <Link to="/find-parking">
                            Find Parking
                        </Link>

                    </div>

                ) : (

                    bookings.map((booking) => (

                        <div
                            className="booking-card"
                            key={booking._id}
                        >

                            {/* Booking Header */}
                            <div className="booking-card-header">

                                <div>

                                    <h2>
                                        {booking.parkingId?.name || "City Mall Parking"}
                                    </h2>

                                    <p>
                                        📍 {booking.parkingId?.location || "City Mall, Kolkata"}
                                    </p>

                                </div>

                                <span className="booking-status">
                                    {booking.status === "Confirmed" ? "✓" : "✕"} {booking.status}
                                </span>

                            </div>

                            {/* Booking Information */}
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
                                    <strong>
                                        {new Date(booking.date).toLocaleDateString("en-IN")}
                                    </strong>
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

                            {/* Booking Actions */}
                            <div className="booking-actions">

                                <Link
                                    to="/find-parking"
                                    className="new-booking-btn"
                                >
                                    Book Another Slot →
                                </Link>

                                {booking.status === "Confirmed" && (
                                    <button
                                        type="button"
                                        className="cancel-booking-btn"
                                        disabled={cancellingId === booking._id}
                                        onClick={() =>
                                            handleCancelBooking(booking._id)
                                        }
                                    >
                                        {cancellingId === booking._id
                                            ? "Cancelling..."
                                            : "Cancel Booking"}
                                    </button>
                                )}

                            </div>

                        </div>

                    ))
                )}

            </section>

        </main>
    );
}

export default MyBookings;
