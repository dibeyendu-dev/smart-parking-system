import { Link } from "react-router-dom";
import { MapPin, Search, Heart, Moon } from "lucide-react";
import "./../css/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                {/* Logo */}
                <Link to="/" className="logo">
                    <MapPin size={24} />

                    <span>
                        Park<span>Ease</span>
                    </span>
                </Link>

                {/* Navigation Links */}
                <div className="nav-links">

                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/search">
                        <Search size={17} />
                        <span>Find Parking</span>
                    </Link>

                    <Link to="/about">
                        How It Works
                    </Link>

                    <Link to="/favorites">
                        <Heart size={17} />
                        <span>Favorites</span>
                    </Link>

                </div>

                {/* Right Side */}
                <div className="nav-actions">

                    {/* Theme Button */}
                    <button className="theme-btn">
                        <Moon size={19} />
                    </button>

                    <Link to="/login" className="login-btn">
                        Login
                    </Link>

                    <Link to="/register" className="register-btn">
                        Get Started
                    </Link>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;