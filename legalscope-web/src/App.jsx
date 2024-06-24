import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PeraturanIndonesia from './pages/PeraturanIndonesia';
import PrediksiHukuman from './pages/PrediksiHukuman';
import Chatbot from './pages/Chatbot';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';

function App() {
    const location = useLocation();
    const shouldShowNavbar = location.pathname !== '/login' && location.pathname !== '/register';

    return (
        <div className="flex flex-col min-h-screen">
            {shouldShowNavbar && <Navbar />}
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/peraturan-indonesia" element={<PeraturanIndonesia />} />
                    <Route path="/prediksi-hukuman" element={<PrediksiHukuman />} />
                    <Route path="/chatbot" element={<Chatbot />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    {/* Tambahkan rute untuk halaman Blog dan Contact jika diperlukan */}
                    {/* <Route path="/blog" element={<Blog />} /> */}
                    {/* <Route path="/contact" element={<Contact />} /> */}
                </Routes>
            </main>
        </div>
    );
}

export default function AppWithRouter() {
    return (
        <Router>
            <App />
        </Router>
    );
}
