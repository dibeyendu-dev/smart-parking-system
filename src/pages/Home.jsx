import { Link } from "react-router-dom";
import "./../css/Home.css";

function Home() {
  return (
    <main className="home-page">

      {/* ================= HERO ================= */}

      <section className="hero-section">

        <div className="hero-content">

          <span className="hero-badge">
            ✦ Smart Mall Parking
          </span>

          <h1>
            Find Your Perfect
            <span> Mall Parking Spot</span>
          </h1>

          <p>
            Find, check and reserve an available parking
            spot inside the mall quickly and easily.
          </p>

          <div className="hero-buttons">

            <Link to="/find-parking" className="hero-primary-btn">
              Find Parking
            </Link>

            <Link to="/about" className="hero-secondary-btn">
              How It Works
            </Link>

          </div>

          <div className="hero-stats">

            <div className="hero-stat">
              <strong>32</strong>
              <span>Parking Spots</span>
            </div>

            <div className="hero-stat">
              <strong>3</strong>
              <span>Parking Floors</span>
            </div>

            <div className="hero-stat">
              <strong>24/7</strong>
              <span>Availability</span>
            </div>

          </div>

        </div>


        {/* ================= HERO VISUAL ================= */}

        <div className="hero-visual">

          <div className="parking-card">

            <div className="parking-card-header">

              <span>
                Mall Parking Availability
              </span>

              <span className="live-status">
                ● Live
              </span>

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

              <span>
                Available Slots
              </span>

              <strong>
                4 / 6
              </strong>

            </div>

          </div>


          {/* Floating Card 1 */}

          <div className="floating-card floating-card-one">

            <span>⚡</span>

            <div>

              <strong>
                Quick Booking
              </strong>

              <small>
                Reserve in seconds
              </small>

            </div>

          </div>


          {/* Floating Card 2 */}

          <div className="floating-card floating-card-two">

            <span>₹</span>

            <div>

              <strong>
                From ₹20/hr
              </strong>

              <small>
                Affordable parking
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PARKING SEARCH ================= */}

      <section className="parking-search-section">

        <div className="section-heading">

          <span>
            ✦ Find Your Spot
          </span>

          <h2>
            Find Parking Inside
            <strong> Our Mall</strong>
          </h2>

          <p>
            Check available parking slots inside the mall
            and reserve your preferred spot.
          </p>

        </div>


        <div className="parking-search-box">

          {/* Location */}

          <div className="search-field">

            <label>
              Location
            </label>

            <div className="search-input">

              <span>
                📍
              </span>

              <input
                type="text"
                value="City Mall, Kolkata"
                readOnly
              />

            </div>

          </div>


          {/* Date */}

          <div className="search-field">

            <label>
              Date
            </label>

            <div className="search-input">

              <span>
                📅
              </span>

              <input
                type="date"
              />

            </div>

          </div>


          {/* Vehicle */}

          <div className="search-field">

            <label>
              Vehicle Type
            </label>

            <div className="search-input">

              <span>
                🚗
              </span>

              <select defaultValue="">

                <option value="">
                  Select vehicle
                </option>

                <option value="bike">
                  Bike
                </option>

                <option value="car">
                  Car
                </option>

                <option value="suv">
                  SUV
                </option>

              </select>

            </div>

          </div>


          {/* Search Button */}

          <Link
            to="/find-parking"
            className="search-button"
          >
            Search Parking
          </Link>
        </div>

      </section>


      {/* ================= FEATURED PARKING ================= */}

      <section className="featured-parking-section">

        <div className="section-heading">

          <span>
            ✦ Mall Parking
          </span>

          <h2>
            Our <strong>Smart Parking Area</strong>
          </h2>

          <p>
            One smart parking system for easy and
            convenient parking inside the mall.
          </p>

        </div>


        <div className="parking-cards">


          {/* ================= MALL PARKING CARD ================= */}

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

                <h3>
                  City Mall Parking
                </h3>

                <span>
                  ⭐ 4.9
                </span>

              </div>


              <p className="parking-location">
                📍 City Mall, Kolkata
              </p>


              <div className="parking-details">

                <span>
                  🅿️ 32 Slots
                </span>

                <span>
                  🚗 All Vehicles
                </span>

              </div>


              <div className="parking-bottom">

                <div>

                  <small>
                    Parking Price
                  </small>

                  <strong
                    style={{
                      display: "block",
                      fontSize: "14px",
                      lineHeight: "1.8"
                    }}
                  >
                    🏍️ ₹20/hr
                    <br />

                    🚗 ₹40/hr
                    <br />

                    🚙 ₹60/hr
                  </strong>

                </div>


                <Link
                  to="/find-parking"
                  className="view-parking-btn"
                >
                  View Parking
                </Link>

              </div>

            </div>

          </div>

        </div>


        {/* View Parking */}

        <div className="featured-action">

          <Link
            to="/find-parking"
            className="view-all-parking"
          >
            View Parking →
          </Link>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="how-it-works-section">

        <div className="section-heading">

          <span>
            ✦ Simple Process
          </span>

          <h2>
            How <strong>Smart Parking</strong> Works
          </h2>

          <p>
            Find and reserve your mall parking spot
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

            <h3>
              Select Mall
            </h3>

            <p>
              Select our mall parking area
              to check available parking slots.
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

            <h3>
              Choose Slot
            </h3>

            <p>
              Check live availability and
              select your preferred parking slot.
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

            <h3>
              Book & Pay
            </h3>

            <p>
              Select your vehicle, date and
              complete your parking booking.
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

            <h3>
              Park Easily
            </h3>

            <p>
              Arrive at the mall and park
              in your reserved parking spot.
            </p>

          </div>

        </div>

      </section>


      {/* ================= KEY FEATURES ================= */}

      <section className="features-section">

        <div className="section-heading">

          <span>
            ✦ Smart Features
          </span>

          <h2>
            Everything You Need for
            <strong> Mall Parking</strong>
          </h2>

          <p>
            A simple smart parking system designed
            specifically for our mall.
          </p>

        </div>


        <div className="features-grid">


          {/* Feature 1 */}

          <div className="feature-card">

            <div className="feature-icon">
              🔎
            </div>

            <h3>
              Smart Search
            </h3>

            <p>
              Quickly check available parking
              slots inside the mall.
            </p>

            <Link
              to="/find-parking"
              className="feature-link"
            >
              Find Parking →
            </Link>

          </div>


          {/* Feature 2 */}

          <div className="feature-card">

            <div className="feature-icon">
              ⚡
            </div>

            <h3>
              Live Availability
            </h3>

            <p>
              Check which parking slots are
              available or occupied.
            </p>

            <Link
              to="/find-parking"
              className="feature-link"
            >
              Check Availability →
            </Link>

          </div>


          {/* Feature 3 */}

          <div className="feature-card">

            <div className="feature-icon">
              📅
            </div>

            <h3>
              Easy Booking
            </h3>

            <p>
              Reserve your preferred mall
              parking slot easily.
            </p>

            <Link
              to="/find-parking"
              className="feature-link"
            >
              Book a Spot →
            </Link>

          </div>


          {/* Feature 4 */}

          <div className="feature-card">

            <div className="feature-icon">
              💰
            </div>

            <h3>
              Smart Pricing
            </h3>

            <p>
              View parking charges according
              to your vehicle type.
            </p>

            <Link
              to="/find-parking"
              className="feature-link"
            >
              View Pricing →
            </Link>

          </div>


          {/* Feature 5 */}

          <div className="feature-card">

            <div className="feature-icon">
              🗺️
            </div>

            <h3>
              Parking Map
            </h3>

            <p>
              Easily locate your parking area
              inside the mall.
            </p>

            <Link
              to="/find-parking"
              className="feature-link"
            >
              View Parking →
            </Link>

          </div>


          {/* Feature 6 */}

          <div className="feature-card">

            <div className="feature-icon">
              🔐
            </div>

            <h3>
              Secure Booking
            </h3>

            <p>
              Keep your account and booking
              information protected.
            </p>

            <Link
              to="/register"
              className="feature-link"
            >
              Get Started →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= STATISTICS ================= */}

      <section className="statistics-section">

        <div className="section-heading">

          <span>
            ✦ Our Parking System
          </span>

          <h2>
            Smart Parking Made
            <strong> Simple</strong>
          </h2>

          <p>
            A dedicated parking solution for
            our mall visitors.
          </p>

        </div>


        <div className="statistics-grid">


          <div className="stat-card">

            <div className="stat-icon">
              🅿️
            </div>

            <div className="stat-content">

              <strong>
                32
              </strong>

              <span>
                Parking Spots
              </span>

            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon">
              🏬
            </div>

            <div className="stat-content">

              <strong>
                1
              </strong>

              <span>
                Mall Location
              </span>

            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon">
              🚗
            </div>

            <div className="stat-content">

              <strong>
                3
              </strong>

              <span>
                Vehicle Types
              </span>

            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon">
              ⭐
            </div>

            <div className="stat-content">

              <strong>
                4.9/5
              </strong>

              <span>
                Parking Rating
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY CHOOSE ================= */}

      <section className="why-parkease-section">

        <div className="section-heading">

          <span>
            ✦ Why Smart Parking
          </span>

          <h2>
            Parking Made
            <strong> Simple & Smart</strong>
          </h2>

          <p>
            Our system makes parking inside the mall
            faster, easier and more convenient.
          </p>

        </div>


        <div className="why-parkease-content">


          {/* Left Side */}

          <div className="why-parkease-visual">

            <div className="parking-orbit">

              <div className="orbit-circle">
              </div>

              <div className="orbit-car">
                🚗
              </div>

            </div>

          </div>


          {/* Right Side */}

          <div className="why-parkease-points">


            <div className="why-point">

              <div className="why-point-icon">
                ⚡
              </div>

              <div>

                <h3>
                  Save Time
                </h3>

                <p>
                  Find an available parking spot
                  without searching manually.
                </p>

              </div>

            </div>


            <div className="why-point">

              <div className="why-point-icon">
                💰
              </div>

              <div>

                <h3>
                  Clear Pricing
                </h3>

                <p>
                  Know the parking cost before
                  booking your slot.
                </p>

              </div>

            </div>


            <div className="why-point">

              <div className="why-point-icon">
                📱
              </div>

              <div>

                <h3>
                  Easy Booking
                </h3>

                <p>
                  Manage your mall parking booking
                  from one simple platform.
                </p>

              </div>

            </div>


            <div className="why-point">

              <div className="why-point-icon">
                🔒
              </div>

              <div>

                <h3>
                  Secure System
                </h3>

                <p>
                  Your account and booking details
                  remain protected.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="cta-section">

        <div className="cta-content">

          <span className="cta-badge">
            ✦ Start Parking Smarter
          </span>

          <h2>
            Ready to Find Your
            <strong> Mall Parking Spot?</strong>
          </h2>

          <p>
            Check available parking slots and
            reserve your spot in just a few clicks.
          </p>

          <div className="cta-actions">

            <Link
              to="/find-parking"
              className="cta-primary-btn"
            >
              Find Parking →
            </Link>

            <Link
              to="/register"
              className="cta-secondary-btn"
            >
              Create Account
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;