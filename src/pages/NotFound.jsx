import { Link } from "react-router-dom";
import "./../css/NotFound.css";

function NotFound() {
    return (
        <main className="not-found-page">
            {/* 404 Content */}
            <section className="not-found-container">
                <span className="not-found-number">404</span>

                <h1>Page Not Found</h1>

                <p>
                    Sorry, the page you are looking for does not exist.
                </p>

                <Link to="/" className="not-found-btn">
                    ← Back to Home
                </Link>
            </section>
        </main>
    );
}

export default NotFound;