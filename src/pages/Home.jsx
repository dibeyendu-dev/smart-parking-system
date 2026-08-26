import { Link } from "react-router-dom";
import "./../css/Home.css";

function Home() {
  return (
    <main className="home-page">

      {/* ================= HERO ================= */}
      <section className="hero-section">

        <div className="hero-content">

          <span className="hero-badge">
            ✦ Smart Parking Solution
          </span>

          <h1>
            Find Your Perfect
            <span> Parking Spot</span>
          </h1>

          <p>
            Discover, reserve and manage your parking
            effortlessly with our smart parking platform.
          </p>

          <div className="hero-buttons">

            <Link to="/search" className="hero-primary-btn">
              Find Parking
            </Link>

            <Link to="/about" className="hero-secondary-btn">
              How It Works
            </Link>

          </div>

          <div className="hero-stats">

            <div className="hero-stat">
              <strong>500+</strong>
              <span>Parking Spots</span>
            </div>

            <div className="hero-stat">
              <strong>50+</strong>
              <span>Parking Areas</span>
            </div>

            <div className="hero-stat">
              <strong>10K+</strong>
              <span>Happy Users</span>
            </div>

          </div>

        </div>


        {/* Hero Visual */}
        <div className="hero-visual">

          <div className="parking-card">

            <div className="parking-card-header">
              <span>Live Availability</span>
              <span className="live-status">● Live</span>
            </div>

            <div className="parking-visual">

              <div className="parking-slot available">
                A1
              </div>

              <div className="parking-slot occupied">
                A2
              </div>

              <div className="parking-slot available">
                A3
              </div>

              <div className="parking-slot available">
                A4
              </div>

              <div className="parking-slot occupied">
                B1
              </div>

              <div className="parking-slot available">
                B2
              </div>

            </div>

            <div className="parking-card-footer">
              <span>Available Slots</span>
              <strong>4 / 6</strong>
            </div>

          </div>


          {/* Floating Cards */}

          <div className="floating-card floating-card-one">
            <span>⚡</span>
            <div>
              <strong>Quick Booking</strong>
              <small>Reserve in seconds</small>
            </div>
          </div>

          <div className="floating-card floating-card-two">
            <span>₹</span>
            <div>
              <strong>From ₹20/hr</strong>
              <small>Affordable parking</small>
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;