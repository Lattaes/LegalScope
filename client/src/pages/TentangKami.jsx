import React from 'react';
import productPhotoFront from '../assets/logo-icon.png'; // Front photo
import productPhotoBack from '../assets/pbl-pbl.jpg'; // Back photo
import { FaRegLightbulb, FaUsers, FaRegHandshake, FaMailBulk } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';

const teamMembers = [
  { name: 'Galih Lanjar Pangastuti', id: '2107412037' },
  { name: 'Ghania Shafiqa Raisa', id: '2107412053' },
  { name: 'Kevin Khalfani Fadillah', id: '2107412040' },
  { name: 'Sayyid Nabil Rifki', id: '2107412034' },
];

const TentangKami = () => {
  return (
    <div className="bg-customNavy min-h-screen p-8 pt-32">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        {/* Left Container for Flip Photo */}
        <div className="flex-1 mb-6 md:mb-0">
          <div className="flip-container">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={productPhotoFront}
                    alt="Front"
                    className="w-full h-auto rounded-lg shadow-lg border-2 border-gradient-to-r from-blue-500 to-teal-500"
                  />
                </div>
                <div className="flip-card-back">
                  <img
                    src={productPhotoBack}
                    alt="Back"
                    className="w-full h-auto rounded-lg shadow-lg border-2 border-gradient-to-r from-blue-500 to-teal-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Container for Text Content */}
        <div className="flex-1 md:pl-8">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Tentang Platform
          </h1>
          <p className="text-base text-gray-700 mb-6 leading-relaxed text-justify">
            Platform Pencarian Hukum Cerdas Berbasis Teknologi NLP Menggunakan Big Data merupakan platform yang
            pencarian dan tanya-jawab hukum. Sistem ini memanfaatkan teknologi big data dan pemrosesan bahasa alami (NLP)
            untuk dalam pengembangannya. Fitur utama meliputi pencarian peraturan hukum berbasis cerdas dan chatbot interaktif
            yang memberikan ringkasan dan penjelasan singkat mengenai isi peraturan hukum yang berlaku di Indonesia.
          </p>
          <p className="text-base text-gray-700 mb-6 leading-relaxed text-justify">
            Platform ini juga menyediakan pustaka hukum terintegrasi, dan pembaruan hukum. Dengan fitur-fitur ini, platform
            ini meningkatkan efisiensi, pemahaman, dan kolaborasi dalam bidang hukum, mempermudah penelitian bagi pengguna,
            serta menyediakan akses mudah ke informasi hukum yang ada di Indonesia.
          </p>

          {/* Features Section with Icons */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Fitur Utama</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <FaRegLightbulb style={{ color: '#F59E0B', fontSize: '1.5rem' }} className="mr-3" />
                <p className="text-base text-gray-700">Pencarian Hukum Cerdas</p>
              </div>
              <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <FaRegHandshake style={{ color: '#3B82F6', fontSize: '1.5rem' }} className="mr-3" />
                <p className="text-base text-gray-700">Chatbot Interaktif</p>
              </div>
              <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <FaUsers style={{ color: '#10B981', fontSize: '1.5rem' }} className="mr-3" />
                <p className="text-base text-gray-700">Pustaka Hukum Terintegrasi</p>
              </div>
              <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <FaMailBulk style={{ color: '#EF4444', fontSize: '1.5rem' }} className="mr-3" />
                <p className="text-base text-gray-700">Pembaruan Hukum</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <h2 className="text-xl font-semibold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Tim Pengusul
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200">
                <MdPerson className="text-gray-500 text-5xl mb-3" />
                <h3 className="text-base font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.id}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
