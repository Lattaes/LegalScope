import React, { useState, useContext } from 'react';
import Logo from '../assets/logo-icon.png';
import DefaultProfile from '../assets/default-profile.png'; // Import the default profile picture
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineMedium,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { UserContext } from '../context/userContext';
import GradientButton from './GradientButton';

const PeraturanIndoContent = [
  { name: "UNDANG-UNDANG", link: "/daftar-peraturan?jenis=UNDANG-UNDANG&page=1" },
  { name: "PERATURAN PEMERINTAH", link: "/daftar-peraturan?jenis=PERATURAN+PEMERINTAH+PENGGANTI+UNDANG-UNDANG&page=1" },
  { name: "PERATURAN PRESIDEN", link: "/daftar-peraturan?jenis=PERATURAN+PRESIDEN&page=1" },
  { name: "PERATURAN MENTERI", link: "/daftar-peraturan?jenis=PERATURAN+PEMERINTAH+PENGGANTI+UNDANG-UNDANG&page=1" },
  { name: "PERATURAN LEMBAGA", link: "/daftar-peraturan?jenis=PERATURAN+BADAN%2FLEMBAGA&page=1" },
  { name: "PERATURAN DAERAH", link: "/daftar-peraturan?jenis=PERATURAN+DAERAH&page=1" },
  { name: "PERATURAN LAINNYA", link: "/daftar-peraturan?jenis=peraturan+lainnya&page=1" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm('You are attempting to log out of LegalScope. Are you sure?');
    if (confirmLogout) {
      setUser(null); // Clear user context
      navigate('/'); // Redirect to home page
    }
  };

  const handleLogoClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="bg-customNavy fixed top-0 z-50 h-24 w-full shadow-xl">
      <div className="container mx-auto flex h-full w-full items-center justify-between px-4 2xl:px-16">
        <div onClick={handleLogoClick} className="cursor-pointer">
          <h2 className="text-1xl font-bold text-white md:text-3xl">LEGALSCOPE.</h2>
        </div>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <li className="text-l ml-10 cursor-pointer text-white duration-500 hover:text-violet-600">
              <div className="dropdown dropdown-hover dropdown-end">
                <div tabIndex={0} role="button">
                  Peraturan Indonesia
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-slate-700 rounded-box z-[1] w-52 p-2 shadow">
                  {PeraturanIndoContent.map((content, index) => (
                    <li key={index}>
                      <Link to={content.link} className="block px-4 py-2 hover:bg-gray-400 text-white">
                        {content.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {user && (
              <>
                <li className="text-l ml-10 cursor-pointer text-white duration-500 hover:border-b hover:text-violet-600">
                  <Link to="/prediksi">Prediksi Hukum</Link>
                </li>
                <li className="text-l ml-10 cursor-pointer text-white duration-500 hover:border-b hover:text-violet-600">
                  <Link to="/chatbot">Chatbot Interaktif</Link>
                </li>
              </>
            )}
            <li className="text-l ml-10 cursor-pointer text-white duration-500 hover:border-b hover:text-violet-600">
              <Link to="/tentang-kami">Tentang Kami</Link>
            </li>
          </ul>
        </div>

        {!user ? (
          <div className="hidden sm:flex items-center ml-10">
            <Link to="/login">
              <button className="text-white px-8 py-2 cursor-pointer duration-100 rounded-md hover:bg-gray-400 ml-4">
                Masuk
              </button>
            </Link>
            <GradientButton to="/register" text="Daftar" />
          </div>
        ) : (
          <div className="flex items-center ml-10">
            <div className="relative">
              <img
                src={`data:image/jpeg;base64,${user.profilePicture}` || DefaultProfile}
                alt="Profile"
                className="w-9 h-9 rounded-full object-cover cursor-pointer"
                onClick={handleNav}
              />
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-700 rounded-md shadow-lg py-1">
                  <Link to="/profile">
                    <p className="block px-4 py-2 text-white hover:bg-gray-400">View Profile</p>
                  </Link>
                  <p onClick={handleLogout} className="block px-4 py-2 text-white hover:bg-gray-400 cursor-pointer">
                    Log Out
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? 'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#C59B6B] p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleLogoClick} className="cursor-pointer">
            <img
              src={Logo}
              alt="Logo"
              width="75"
              height="100"
              className="cursor-pointer pt-6"
            />
          </div>
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
              <Link to="/peraturan">Peraturan Indonesia</Link>
            </li>
            {user && (
              <>
                <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                  <Link to="/prediksi">Prediksi Hukum</Link>
                </li>
                <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                  <Link to="/chatbot">Chatbot Interaktif</Link>
                </li>
              </>
            )}
            <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
              <Link to="/tentang-kami">Tentang Kami</Link>
            </li>
            {!user ? (
              <>
                <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                  <Link to="/login">Masuk</Link>
                </li>
                <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                  <Link to="/register">Daftar Sekarang</Link>
                </li>
              </>
            ) : (
              <>
                <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                  <Link to="/profile">Profile</Link>
                </li>
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