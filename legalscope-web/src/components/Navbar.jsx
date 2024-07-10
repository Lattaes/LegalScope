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
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div>
          <h2 className="text-1xl font-bold text-[#541212] md:text-3xl">
            LEGALSCOPE.
          </h2>
        </div>
        <div className="hidden flex-grow items-center justify-center md:flex">
          <ul className="flex items-center justify-center space-x-4">
            <li>
              <Link
                className="ml-4 rounded-md px-2 py-2 text-gray-700 hover:bg-gray-400 hover:text-gray-900"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="ml-4 rounded-md px-2 py-2 text-gray-700 hover:bg-gray-400 hover:text-gray-900"
                to="/peraturan"
              >
                Peraturan Indonesia
              </Link>
            </li>
            <li>
              <Link
                className="ml-4 rounded-md px-2 py-2 text-gray-700 hover:bg-gray-400 hover:text-gray-900"
                to="/prediksi-hukuman"
              >
                Prediksi Hukuman
              </Link>
            </li>
            <li>
              <Link
                className="ml-4 rounded-md px-2 py-2 text-gray-700 hover:bg-gray-400 hover:text-gray-900"
                to="/chatbot"
              >
                Chatbot
              </Link>
            </li>
            <li>
              <Link
                className="ml-4 rounded-md px-2 py-2 text-gray-700 hover:bg-gray-400 hover:text-gray-900"
                to="/about-us"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="ml-auto flex items-center">
          <Link to="/login">
            <button className="rounded-md bg-customMaroon px-4 py-2 text-white hover:bg-red-900">
              Masuk
            </button>
          </Link>
          <Link to="/register">
            <button className="ml-4 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-400">
              Daftar
            </button>
          </Link>
          <button
            onClick={toggleMenu}
            className="ml-4 focus:outline-none md:hidden"
          >
            {isMenuOpen ? (
              <ion-icon
                name="close"
                className="cursor-pointer text-3xl text-gray-700"
              ></ion-icon>
            ) : (
              <ion-icon
                name="menu"
                className="cursor-pointer text-3xl text-gray-700"
              ></ion-icon>
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-16 w-full bg-white shadow-lg md:hidden ${isMenuOpen ? "block" : "hidden"}`}
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
