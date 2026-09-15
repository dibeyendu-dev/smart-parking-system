import { Link } from "react-router-dom";
import { Heart, MapPin, Car } from "lucide-react";
import "./../css/Favorites.css";

function Favorites() {
    return (
        <main className="favorites-page">
            {/* Favorites Header */}
            <section className="favorites-header">
                <span className="section-badge">✦ Favorites</span>
                <h1>
                    Your <strong>Favorite Parking</strong>
                </h1>
                <p>Save your preferred parking spots for quick access.</p>
            </section>

            {/* Favorite Parking */}
            <section className="favorites-container">
                <div className="favorite-card">
                    <div className="favorite-card-top">
                        <div className="favorite-icon">
                            <Heart size={22} />
                        </div>

                        <button className="remove-favorite-btn">
                            Remove
                        </button>
                    </div>

                    <h2>City Mall Parking</h2>

                    <p className="favorite-location">
                        <MapPin size={16} />
                        City Mall, Kolkata
                    </p>

                    <div className="favorite-details">
                        <div>
                            <Car size={17} />
                            <span>Bike ₹20/hr</span>
                        </div>

                        <div>
                            <Car size={17} />
                            <span>Car ₹40/hr</span>
                        </div>

                        <div>
                            <Car size={17} />
                            <span>SUV ₹60/hr</span>
                        </div>
                    </div>

                    <Link
                        to="/find-parking"
                        className="favorite-book-btn"
                    >
                        View Parking →
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Favorites;