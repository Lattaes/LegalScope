import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <div>
          <h2 className="text-1xl md:text-3xl font-bold text-[#541212]">
            LEGALSCOPE.
          </h2>
        </div>
        <div className="hidden md:flex flex-grow items-center justify-center">
          <ul className="flex justify-center items-center space-x-4">
            <li>
              <Link
                className="text-gray-700 hover:text-gray-900 px-2 py-2 rounded-md hover:bg-gray-400 ml-4"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 hover:text-gray-900 px-2 py-2 rounded-md hover:bg-gray-400 ml-4"
                to="/peraturan-indonesia"
              >
                Peraturan Indonesia
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 hover:text-gray-900 px-2 py-2 rounded-md hover:bg-gray-400 ml-4"
                to="/prediksi-hukuman"
              >
                Prediksi Hukuman
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 hover:text-gray-900 px-2 py-2 rounded-md hover:bg-gray-400 ml-4"
                to="/chatbot"
              >
                Chatbot
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 hover:text-gray-900 px-2 py-2 rounded-md hover:bg-gray-400 ml-4"
                to="/about-us"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center ml-auto">
          <Link to="/login">
            <button className="bg-customMaroon text-white px-4 py-2 rounded-md hover:bg-red-900">
              Masuk
            </button>
          </Link>
          <Link to="/register">
            <button className="text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 ml-4">
              Daftar
            </button>
          </Link>
          <button
            onClick={toggleMenu}
            className="md:hidden ml-4 focus:outline-none"
          >
            {isMenuOpen ? (
              <ion-icon
                name="close"
                className="text-3xl cursor-pointer text-gray-700"
              ></ion-icon>
            ) : (
              <ion-icon
                name="menu"
                className="text-3xl cursor-pointer text-gray-700"
              ></ion-icon>
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link className="text-gray-700 hover:text-gray-900" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 hover:text-gray-900"
                to="/peraturan-indonesia"
              >
                Peraturan Indonesia
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 hover:text-gray-900"
                to="/prediksi-hukuman"
              >
                Prediksi Hukuman
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-gray-900" to="/chatbot">
                Chatbot
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 hover:text-gray-900"
                to="/about-us"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 hover:text-gray-900"
                to="/register"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
