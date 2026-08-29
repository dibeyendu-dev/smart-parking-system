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
      {/* ================= PARKING SEARCH ================= */}
      <section className="parking-search-section">

        <div className="section-heading">
          <span>✦ Find Your Spot</span>

          <h2>
            Find Parking That
            <strong> Fits You</strong>
          </h2>

          <p>
            Search for available parking spaces,
            choose your preferred location and book instantly.
          </p>
        </div>


        <div className="parking-search-box">

          {/* Location */}
          <div className="search-field">
            <label>Location</label>

            <div className="search-input">
              <span>📍</span>
              <input
                type="text"
                placeholder="Enter parking location"
              />
            </div>
          </div>


          {/* Date */}
          <div className="search-field">
            <label>Date</label>

            <div className="search-input">
              <span>📅</span>

              <input
                type="date"
              />
            </div>
          </div>


          {/* Vehicle */}
          <div className="search-field">
            <label>Vehicle Type</label>

            <div className="search-input">
              <span>🚗</span>

              <select>
                <option value="">Select vehicle</option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="suv">SUV</option>
              </select>
            </div>
          </div>


          {/* Search Button */}
          <Link
            to="/search"
            className="search-button"
          >
            Search Parking
          </Link>

        </div>

      </section>
      {/* ================= FEATURED PARKING ================= */}
      <section className="featured-parking-section">

        <div className="section-heading">

          <span>✦ Popular Parking</span>

          <h2>
            Featured <strong>Parking Spots</strong>
          </h2>

          <p>
            Explore popular parking areas with
            convenient locations and affordable rates.
          </p>

        </div>


        <div className="parking-cards">

          {/* Parking Card 1 */}
          <div className="parking-card-item">

            <div className="parking-image">
              <span className="parking-status">
                ● Available
              </span>

              <span className="parking-icon">
                🚗
              </span>
            </div>

            <div className="parking-info">

              <div className="parking-title">
                <h3>City Center Parking</h3>
                <span>⭐ 4.8</span>
              </div>

              <p className="parking-location">
                📍 Central Avenue, Kolkata
              </p>

              <div className="parking-details">
                <span>🅿️ 24 Slots</span>
                <span>🚗 Car & Bike</span>
              </div>

              <div className="parking-bottom">

                <div>
                  <small>Starting from</small>
                  <strong>₹40<span>/hr</span></strong>
                </div>

                <Link
                  to="/search"
                  className="view-parking-btn"
                >
                  View Parking
                </Link>

              </div>

            </div>

          </div>


          {/* Parking Card 2 */}
          <div className="parking-card-item">

            <div className="parking-image">
              <span className="parking-status">
                ● Available
              </span>

              <span className="parking-icon">
                🏢
              </span>
            </div>

            <div className="parking-info">

              <div className="parking-title">
                <h3>Metro Station Parking</h3>
                <span>⭐ 4.7</span>
              </div>

              <p className="parking-location">
                📍 Park Street, Kolkata
              </p>

              <div className="parking-details">
                <span>🅿️ 18 Slots</span>
                <span>🚗 Car & Bike</span>
              </div>

              <div className="parking-bottom">

                <div>
                  <small>Starting from</small>
                  <strong>₹30<span>/hr</span></strong>
                </div>

                <Link
                  to="/search"
                  className="view-parking-btn"
                >
                  View Parking
                </Link>

              </div>

            </div>

          </div>


          {/* Parking Card 3 */}
          <div className="parking-card-item">

            <div className="parking-image">
              <span className="parking-status">
                ● Available
              </span>

              <span className="parking-icon">
                🏬
              </span>
            </div>

            <div className="parking-info">

              <div className="parking-title">
                <h3>Mall Parking Zone</h3>
                <span>⭐ 4.9</span>
              </div>

              <p className="parking-location">
                📍 Salt Lake, Kolkata
              </p>

              <div className="parking-details">
                <span>🅿️ 32 Slots</span>
                <span>🚗 All Vehicles</span>
              </div>

              <div className="parking-bottom">

                <div>
                  <small>Starting from</small>
                  <strong>₹50<span>/hr</span></strong>
                </div>

                <Link
                  to="/search"
                  className="view-parking-btn"
                >
                  View Parking
                </Link>

              </div>

            </div>

          </div>

        </div>


        {/* View All */}
        <div className="featured-action">

          <Link
            to="/search"
            className="view-all-parking"
          >
            View All Parking →
          </Link>

        </div>

      </section>
      {/* ================= HOW IT WORKS ================= */}
      <section className="how-it-works-section">

        <div className="section-heading">

          <span>✦ Simple Process</span>

          <h2>
            How <strong>ParkEase</strong> Works
          </h2>

          <p>
            Find, book and manage your parking spot
            in just a few simple steps.
          </p>

        </div>
        <div className="steps-container">

          {/* Step 1 */}
          <div className="step-card">

            <div className="step-number">
              01
            </div>

            <div className="step-icon">
              📍
            </div>

            <h3>Find Parking</h3>

            <p>
              Search for nearby parking areas
              based on your location and needs.
            </p>

          </div>


          {/* Step 2 */}
          <div className="step-card">

            <div className="step-number">
              02
            </div>

            <div className="step-icon">
              🅿️
            </div>

            <h3>Choose Your Spot</h3>
            <p>
              Check available slots, prices and
              choose the perfect parking space.
            </p>

          </div>


          {/* Step 3 */}
          <div className="step-card">

            <div className="step-number">
              03
            </div>

            <div className="step-icon">
              📅
            </div>

            <h3>Book & Pay</h3>

            <p>
              Select your vehicle, date and time,
              then complete your booking securely.
            </p>

          </div>

          {/* Step 4 */}
          <div className="step-card">

            <div className="step-number">
              04
            </div>

            <div className="step-icon">
              🚗
            </div>

            <h3>Park & Enjoy</h3>

            <p>
              Arrive at your parking spot, park
              easily and manage your booking.
            </p>

          </div>

        </div>

      </section>
      {/* ================= KEY FEATURES ================= */}
      <section className="features-section">

        <div className="section-heading">

          <span>✦ Powerful Features</span>

          <h2>
            Everything You Need for
            <strong> Smart Parking</strong>
          </h2>

          <p>
            Experience a smarter, easier and more
            convenient way to find and manage parking.
          </p>

        </div>

        <div className="features-grid">

          {/* Feature 1 */}
          <div className="feature-card">

            <div className="feature-icon">
              🔎
            </div>

            <h3>Smart Search</h3>

            <p>
              Quickly find nearby parking spaces
              based on location and availability.
            </p>

            <Link to="/search" className="feature-link">
              Find Parking →
            </Link>

          </div>

          {/* Feature 2 */}
          <div className="feature-card">

            <div className="feature-icon">
              ⚡
            </div>

            <h3>Live Availability</h3>

            <p>
              Check available parking slots in
              real-time before making a booking.
            </p>

            <Link to="/search" className="feature-link">
              Check Availability →
            </Link>

          </div>
          {/* Feature 3 */}
          <div className="feature-card">

            <div className="feature-icon">
              📅
            </div>

            <h3>Easy Booking</h3>

            <p>
              Reserve your preferred parking spot
              with just a few simple steps.
            </p>

            <Link to="/search" className="feature-link">
              Book a Spot →
            </Link>

          </div>

          {/* Feature 4 */}
          <div className="feature-card">

            <div className="feature-icon">
              💰
            </div>

            <h3>Smart Pricing</h3>

            <p>
              Calculate parking charges based on
              vehicle type and parking duration.
            </p>

            <Link to="/search" className="feature-link">
              View Pricing →
            </Link>

          </div>


        </main>
        );
}

        export default Home;