import React from 'react';
import logoIcon from '../assets/logo-icon.png';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import FiturDaftarHukum from './FiturDaftarHukum';
import Footer from '../components/Footer';

export default function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <>
      <section className="hero bg-cover bg-center text-white py-20 relative bg-customNavy">
        {/* <div className="circlePosition absolute z-10 top-1/2 left-0 transform -translate-x -translate-y-1/2 w-[550px] h-[600px] bg-customBeige rounded-full blur-[90px]"></div> */}
        <div className="container max-w-6xl mx-auto px-4 py-24 md:flex md:justify-between items-center relative z-20">
          <div className="md:w-1 text-center md:text-left">
            <img src={logoIcon} alt="Hero Image" className="mx-auto md:max-w-none w-96" />
          </div>
          <div className="md:w-1/2 md:pl-2 text-center md:text-left">
            <div className="mb-4 text-gray-300">
              Platform Pencarian Hukum Cerdas
            </div>
            <div className="mb-6 border-l-4 border-white pl-3 md:pl-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-7" style={{
                background: 'linear-gradient(89.83deg, #2563eb 0.11%, #d946ef 58.65%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.07)',
                fontStyle: 'normal',
                letterSpacing: '0.02em',
                lineHeight: '58px'
              }}
              >
                Berbasis Teknologi NLP Menggunakan Big Data
              </h1>
            </div>
            <p className="text-gray-300">
              Sistem ini akan memberikan kemampuan untuk mencari, mengklasifikasikan, dan memahami peraturan hukum secara efisien. Selain itu, platform ini juga dirancang untuk memfasilitasi interaksi pengguna melalui chatbot interaktif dan pencarian peraturan hukum di Indonesia.
            </p>
            <div className="mt-8 flex justify-center md:justify-start items-center gap-4">
              {!!user && (
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 animate-pulse">
                  Hello <span className="text-yellow-300">{user.username}</span>! 🎉
                </h2>
              )}
            </div>
          </div>
        </div>
      </section>
      <FiturDaftarHukum />
      <Footer />
    </>
  )
}