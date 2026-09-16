import { Link } from "react-router-dom";
import "./../css/ForgotPassword.css";

function ForgotPassword() {
    return (
        <main className="forgot-password-page">
            {/* Forgot Password Header */}
            <section className="forgot-password-header">
                <span className="section-badge">✦ Password Recovery</span>

                <h1>
                    Forgot Your <strong>Password?</strong>
                </h1>

                <p>
                    Enter your email address and we will help you reset your password.
                </p>
            </section>

            {/* Forgot Password Form */}
            <section className="forgot-password-container">
                <form className="forgot-password-form">
                    <div className="forgot-password-field">
                        <label>Email Address</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="reset-password-btn"
                    >
                        Send Reset Link →
                    </button>

                    <p className="back-login-text">
                        Remember your password?
                        <Link to="/login"> Login</Link>
                    </p>
                </form>
            </section>
        </main>
    );
}

export default ForgotPassword;