import { Link } from "react-router-dom";
import "./../css/Login.css";

function Login() {
    return (
        <main className="login-page">
            {/* Login Header */}
            <section className="login-header">
                <span className="section-badge">✦ Welcome Back</span>
                <h1>
                    Login to <strong>ParkEase</strong>
                </h1>
                <p>Access your parking bookings and account.</p>
            </section>

            {/* Login Form */}
            <section className="login-container">
                <form className="login-form">
                    <div className="login-field">
                        <label>Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="login-field">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="login-options">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <Link to="/forgot-password">
                            Forgot Password?
                        </Link>
                    </div>

                    <button type="submit" className="login-submit-btn">
                        Login →
                    </button>

                    <p className="register-text">
                        Don't have an account?
                        <Link to="/register"> Create Account</Link>
                    </p>
                </form>
            </section>
        </main>
    );
}

export default Login;