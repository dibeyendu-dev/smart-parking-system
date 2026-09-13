import { Link } from "react-router-dom";
import { MapPin, Search, CalendarCheck, Car } from "lucide-react";
import "./../css/About.css";

function About() {
    return (
        <main className="about-page">
            {/* About Header */}
            <section className="about-header">
                <span className="section-badge">✦ How It Works</span>
                <h1>
                    Parking Made <strong>Simple</strong>
                </h1>
                <p>
                    Find, select and book your parking slot easily with ParkEase.
                </p>
            </section>

            {/* How It Works */}
            <section className="how-it-works">
                <div className="how-step">
                    <div className="how-icon">
                        <MapPin size={28} />
                    </div>
                    <span>01</span>
                    <h2>Choose Parking</h2>
                    <p>
                        Select City Mall Parking and check the available slots.
                    </p>
                </div>

                <div className="how-step">
                    <div className="how-icon">
                        <Search size={28} />
                    </div>
                    <span>02</span>
                    <h2>Select Your Slot</h2>
                    <p>
                        Choose an available parking slot for your vehicle.
                    </p>
                </div>

                <div className="how-step">
                    <div className="how-icon">
                        <CalendarCheck size={28} />
                    </div>
                    <span>03</span>
                    <h2>Enter Details</h2>
                    <p>
                        Select your date, start time and parking duration.
                    </p>
                </div>

                <div className="how-step">
                    <div className="how-icon">
                        <Car size={28} />
                    </div>
                    <span>04</span>
                    <h2>Confirm Booking</h2>
                    <p>
                        Confirm your booking and reserve your parking slot.
                    </p>
                </div>
            </section>

            {/* Call To Action */}
            <section className="about-cta">
                <h2>Ready to Find Your Parking Spot?</h2>
                <p>Book your parking slot quickly with ParkEase.</p>
                <Link to="/find-parking" className="about-cta-btn">
                    Find Parking →
                </Link>
            </section>
        </main>
    );
}

export default About;