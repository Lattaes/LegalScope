import React, { useState, useContext } from 'react';
import Logo from '../assets/logo-icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineMedium, AiOutlineTwitter, AiOutlineUser } from 'react-icons/ai';
import { UserContext } from '../context/userContext';
import GradientButton from './GradientButton';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        const confirmLogout = window.confirm("You are attempting to log out of LegalScope. Are you sure?");
        if (confirmLogout) {
            setUser(null); // Clear user context
            navigate('/'); // Redirect to home page
        }
    };

    return (
        <nav className="fixed top-0 w-full h-24 bg-customNavy z-50 shadow-xl">
            <div className="container mx-auto flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link to="/">
                    <h2 className="text-1xl md:text-3xl font-bold text-white">LEGALSCOPE.</h2>
                </Link>
                <div className="hidden sm:flex">
                    <ul className="hidden sm:flex">
                        <Link to="/daftar-peraturan">
                            <li className="ml-10 hover:border-b text-l cursor-pointer hover:text-violet-600 duration-500 text-white">Peraturan Indonesia</li>
                        </Link>
                        <Link to="/prediksi">
                            <li className="ml-10 hover:border-b text-l cursor-pointer hover:text-violet-600 duration-500 text-white">Prediksi Hukum</li>
                        </Link>
                        <Link to="/chatbot">
                            <li className="ml-10 hover:border-b text-l cursor-pointer hover:text-violet-600 duration-500 text-white">Chatbot Interaktif</li>
                        </Link>
                        <Link to="/tentangKami">
                            <li className="ml-10 hover:border-b text-l cursor-pointer hover:text-violet-600 duration-500 text-white">Tentang Kami</li>
                        </Link>
                    </ul>
                </div>

                {!user ? (
                    <div className="hidden sm:flex items-center ml-10">
                        <Link to="/login">
                            <button className="text-white px-8 py-2 cursor-pointer duration-500 rounded-md hover:bg-gray-400 ml-4">Masuk</button>
                        </Link>
                        <GradientButton to="/register" text="Daftar" />
                    </div>
                ) : (
                    <div className="flex items-center ml-10">
                        <div className="relative">
                            <AiOutlineUser size={25} className="text-white cursor-pointer" onClick={handleNav} />
                            {menuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                    <Link to="/profile">
                                        <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">View Profile</p>
                                    </Link>
                                    <p onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">Log Out</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={
                menuOpen
                    ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#C59B6B] p-10 ease-in duration-500"
                    : "fixed left-[-100%]  top-0 p-10 ease-in duration-500"
            }
            >
                <div className="flex w-full items-center justify-end">
                    <Link to="/">
                        <img
                            src={Logo}
                            alt="Logo"
                            width="75"
                            height="100"
                            className="cursor-pointer pt-6"
                        />
                    </Link>
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <div className="flex-col py-4">
                    <ul>
                        <Link to="/">
                            <li onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Home
                            </li>
                        </Link>
                        <Link to="/peraturan">
                            <li onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Peraturan Indonesia
                            </li>
                        </Link>
                        <Link to="/prediksi">
                            <li onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Prediksi Hukum
                            </li>
                        </Link>
                        <Link to="/chatbot">
                            <li onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Chatbot Interaktif
                            </li>
                        </Link>
                        <Link to="/tentangKami">
                            <li onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Tentang Kami
                            </li>
                        </Link>
                        {!user ? (
                            <>
                                <Link to="/login">
                                    <li onClick={() => setMenuOpen(false)}
                                        className="py-4 cursor-pointer"
                                    >
                                        Masuk
                                    </li>
                                </Link>
                                <Link to="/register">
                                    <li onClick={() => setMenuOpen(false)}
                                        className="py-4 cursor-pointer"
                                    >
                                        Daftar Sekarang
                                    </li>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/profile">
                                    <li onClick={() => setMenuOpen(false)}
                                        className="py-4 cursor-pointer"
                                    >
                                        Profile
                                    </li>
                                </Link>
                                <li onClick={handleLogout} className="py-4 cursor-pointer">
                                    Log Out
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                <div className="flex justify-around pt-10 items-center">
                    <AiOutlineInstagram size={30} className="cursor-pointer" />
                    <AiOutlineMedium size={30} className="cursor-pointer" />
                    <AiOutlineTwitter size={30} className="cursor-pointer" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
