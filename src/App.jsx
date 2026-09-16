import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FindParking from "./pages/FindParking";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/find-parking" element={<FindParking />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/my-bookings" element={<MyBookings />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;