import React from 'react';
import { FaSearch, FaClipboardList, FaComments } from 'react-icons/fa';
import FeatureImage1 from '../assets/feature1.jpg';
import FeatureImage2 from '../assets/feature2.jpg';
import FeatureImage3 from '../assets/feature3.jpg';

const Features = () => {
  return (
    <section className="features" style={{ background: 'linear-gradient(to bottom, #000000, #541212)' }}>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Fitur Utama</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-container bg-white p-6 shadow-lg rounded-lg relative">
            <img src={FeatureImage1} alt="Feature 1" className="rounded-lg mb-4 w-full" />
            <FaSearch className="text-4xl text-primary-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-4 text-center">Daftar Hukum Indonesia</h3>
            <p className="text-center mb-6">
              Menggunakan teknologi NLP untuk memahami permintaan pengguna dan memberikan hasil pencarian yang relevan.
            </p>
          </div>
          <div className="feature-container bg-white p-6 shadow-lg rounded-lg relative">
            <img src={FeatureImage2} alt="Feature 2" className="rounded-lg mb-4 w-full" />
            <FaClipboardList className="text-4xl text-primary-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-4 text-center">Prediksi Hukuman</h3>
            <p className="text-center mb-6">
              Algoritma AI mengelompokkan hasil berdasarkan jenis dan bidang hukum, serta menyediakan filter tambahan.
            </p>
          </div>
          <div className="feature-container bg-white p-6 shadow-lg rounded-lg relative">
            <img src={FeatureImage3} alt="Feature 3" className="rounded-lg mb-4 w-full" />
            <FaComments className="text-4xl text-primary-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-4 text-center">Chatbot Interaktif</h3>
            <p className="text-center mb-6">
              Memfasilitasi interaksi pengguna dengan database peraturan hukum, menyediakan ringkasan dan penjelasan singkat.
            </p>
          </div>
        </div>
        {/* Single Get Started Button outside cards */}
        <div className="flex justify-center mt-8">
          <a href="/login" className="bg-customGreen text-white px-6 py-3 rounded-md hover:bg-emerald-900">Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default Features;
