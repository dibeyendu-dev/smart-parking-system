import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FindParking from "./pages/FindParking";
import Booking from "./pages/Booking";

function App() {
    return (
        <>
            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/search"
                    element={<FindParking />}
                />
                <Route
                    path="/booking"
                    element={<Booking />}
                />

            </Routes>
        </>
    );
}

export default App;