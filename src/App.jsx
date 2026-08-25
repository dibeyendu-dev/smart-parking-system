import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />

            <main className="page-content">
                <h1>Smart Parking</h1>
                <p>Find your perfect parking spot.</p>
            </main>

            <Footer />
        </>
    );
}

export default App;