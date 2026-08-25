import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import "./../css/Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Brand */}
                <div className="footer-brand">

                    <Link to="/" className="footer-logo">
                        <MapPin size={24} />

                        <span>
                            Park<span>Ease</span>
                        </span>
                    </Link>

                    <p>
                        Smart and simple parking solutions
                        for a better urban experience.
                    </p>

                </div>


                {/* Quick Links */}
                <div className="footer-column">

                    <h3>Quick Links</h3>

                    <Link to="/">Home</Link>
                    <Link to="/search">Find Parking</Link>
                    <Link to="/about">How It Works</Link>
                    <Link to="/favorites">Favorites</Link>

                </div>


                {/* Support */}
                <div className="footer-column">

                    <h3>Support</h3>

                    <Link to="/help">Help Center</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms & Conditions</Link>

                </div>


                {/* Contact */}
                <div className="footer-column">

                    <h3>Contact</h3>

                    <p>support@parkease.com</p>
                    <p>+91 98765 43210</p>
                    <p>India</p>

                </div>

            </div>


            {/* Bottom */}
            <div className="footer-bottom">

                <p>
                    © 2026 ParkEase. All rights reserved.
                </p>

                <p>
                    Smart Parking Solution
                </p>

            </div>

        </footer>
    );
}

export default Footer;