import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FindParking from "./pages/FindParking";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/find-parking" element={<FindParking />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/my-bookings" element={<MyBookings />} />
            </Routes>
        </>
    );
}

export default App;