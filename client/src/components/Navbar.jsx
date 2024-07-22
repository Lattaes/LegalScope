import { useState, useContext } from "react";
import Logo from "../assets/logo-icon.png";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineMedium,
  AiOutlineTwitter,
  AiOutlineUser,
} from "react-icons/ai";
import { UserContext } from "../context/userContext";
import GradientButton from "./GradientButton";

const PeraturanIndoContent = [
  {
    name: "UNDANG-UNDANG",
    link: "/daftar-peraturan?jenis=UNDANG-UNDANG&page=1",
  },
  {
    name: "PERATURAN PEMERINTAH",
    link: "/daftar-peraturan?jenis=PERATURAN+PEMERINTAH+PENGGANTI+UNDANG-UNDANG&page=1",
  },
  {
    name: "PERATURAN PRESIDEN",
    link: "/daftar-peraturan?jenis=PERATURAN+PRESIDEN&page=1",
  },
  {
    name: "PERATURAN MENTERI",
    link: "/daftar-peraturan?jenis=PERATURAN+PEMERINTAH+PENGGANTI+UNDANG-UNDANG&page=1",
  },
  {
    name: "PERATURAN LEMBAGA",
    link: "/daftar-peraturan?jenis=PERATURAN+BADAN%2FLEMBAGA&page=1",
  },
  {
    name: "PERATURAN DAERAH",
    link: "/daftar-peraturan?jenis=PERATURAN+DAERAH&page=1",
  },
  {
    name: "PERATURAN LAINNYA",
    link: "/daftar-peraturan?jenis=peraturan+lainnya&page=1",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "You are attempting to log out of LegalScope. Are you sure?",
    );
    if (confirmLogout) {
      setUser(null); // Clear user context
      navigate("/"); // Redirect to home page
    }
  };

  return (
    <nav className="bg-customNavy fixed top-0 z-50 h-24 w-full shadow-xl">
      <div className="container mx-auto flex h-full w-full items-center justify-between px-4 2xl:px-16">
        <Link to="/">
          <h2 className="text-1xl font-bold text-white md:text-3xl">
            LEGALSCOPE.
          </h2>
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link to="/peraturan">
              <li className="text-l ml-10 cursor-pointer text-white duration-500 hover:text-violet-600">
                <div className="dropdown dropdown-hover dropdown-end">
                  <div tabIndex={0} role="button" className="m-1">
                    Peraturan Indonesia
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    {PeraturanIndoContent.map((content, index) => (
                      <Link to={content.link} key={index}>
                        <li>
                          <a>{content.name}</a>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </li>
            </Link>
            <Link to="/prediksi" className="flex items-center justify-end">
              <li className="text-l ml-10 cursor-pointer text-white duration-500 hover:border-b hover:text-violet-600">
                Prediksi Hukum
              </li>
            </Link>
            <Link to="/chatbot" className="flex items-center justify-end">
              <li className="text-l ml-10 cursor-pointer text-white duration-500 hover:border-b hover:text-violet-600">
                Chatbot Interaktif
              </li>
            </Link>
            <Link to="/tentangKami" className="flex items-center justify-end">
              <li className="text-l ml-10 cursor-pointer text-white duration-500 hover:border-b hover:text-violet-600">
                Tentang Kami
              </li>
            </Link>
          </ul>
        </div>

        {!user ? (
          <div className="ml-10 hidden items-center sm:flex">
            <Link to="/login">
              <button className="ml-4 cursor-pointer rounded-md px-8 py-2 text-white duration-500 hover:bg-gray-400">
                Masuk
              </button>
            </Link>
            <GradientButton to="/register" text="Daftar" />
          </div>
        ) : (
          <div className="ml-10 flex items-center">
            <div className="relative">
              <AiOutlineUser
                size={25}
                className="cursor-pointer text-white"
                onClick={handleNav}
              />
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg">
                  <Link to="/profile">
                    <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      View Profile
                    </p>
                  </Link>
                  <p
                    onClick={handleLogout}
                    className="block cursor-pointer px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Log Out
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <div onClick={handleNav} className="cursor-pointer pl-24 md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 h-screen w-[65%] bg-[#C59B6B] p-10 duration-500 ease-in sm:hidden"
            : "fixed left-[-100%] top-0 p-10 duration-500 ease-in"
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
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer py-4"
              >
                Home
              </li>
            </Link>
            <Link to="/peraturan">
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer py-4"
              >
                Peraturan Indonesia
              </li>
            </Link>
            <Link to="/prediksi">
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer py-4"
              >
                Prediksi Hukum
              </li>
            </Link>
            <Link to="/chatbot">
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer py-4"
              >
                Chatbot Interaktif
              </li>
            </Link>
            <Link to="/tentangKami">
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer py-4"
              >
                Tentang Kami
              </li>
            </Link>
            {!user ? (
              <>
                <Link to="/login">
                  <li
                    onClick={() => setMenuOpen(false)}
                    className="cursor-pointer py-4"
                  >
                    Masuk
                  </li>
                </Link>
                <Link to="/register">
                  <li
                    onClick={() => setMenuOpen(false)}
                    className="cursor-pointer py-4"
                  >
                    Daftar Sekarang
                  </li>
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile">
                  <li
                    onClick={() => setMenuOpen(false)}
                    className="cursor-pointer py-4"
                  >
                    Profile
                  </li>
                </Link>
                <li onClick={handleLogout} className="cursor-pointer py-4">
                  Log Out
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="flex items-center justify-around pt-10">
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineMedium size={30} className="cursor-pointer" />
          <AiOutlineTwitter size={30} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
