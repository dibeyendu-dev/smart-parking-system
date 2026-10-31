import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../css/Login.css";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            setLoading(true);

            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            localStorage.setItem("user", JSON.stringify(data.user));

            setMessage("Login successful!");

            navigate("/");

        } catch (error) {
            localStorage.removeItem("user");
            setMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="login-page">
            <section className="login-header">
                <span className="section-badge">✦ Welcome Back</span>
                <h1>
                    Login to <strong>ParkEase</strong>
                </h1>
                <p>Access your parking bookings and account.</p>
            </section>

            <section className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-field">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="login-field">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
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

                    {message && <p>{message}</p>}

                    <button
                        type="submit"
                        className="login-submit-btn"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login →"}
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