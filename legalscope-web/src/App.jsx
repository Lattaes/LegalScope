import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PeraturanIndonesia from "./pages/PeraturanIndonesia";
import PrediksiHukuman from "./pages/PrediksiHukuman";
import Chatbot from "./pages/Chatbot";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Editprofile" element={<EditProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/peraturan-indonesia"
              element={<PeraturanIndonesia />}
            />
            <Route path="/prediksi-hukuman" element={<PrediksiHukuman />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* Tambahkan rute untuk halaman Blog dan Contact jika diperlukan */}
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
