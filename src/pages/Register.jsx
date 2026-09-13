import { Link } from "react-router-dom";
import "./../css/Register.css";

function Register() {
    return (
        <main className="register-page">
            {/* Register Header */}
            <section className="register-header">
                <span className="section-badge">✦ Create Account</span>
                <h1>
                    Join <strong>ParkEase</strong>
                </h1>
                <p>Create your account and start booking parking slots.</p>
            </section>

            {/* Register Form */}
            <section className="register-container">
                <form className="register-form">
                    <div className="register-field">
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    <div className="register-field">
                        <label>Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="register-field">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>

                    <div className="register-field">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            required
                        />
                    </div>

                    <div className="register-field">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    <button type="submit" className="register-submit-btn">
                        Create Account →
                    </button>

                    <p className="login-text">
                        Already have an account?
                        <Link to="/login"> Login</Link>
                    </p>
                </form>
            </section>
        </main>
    );
}

export default Register;