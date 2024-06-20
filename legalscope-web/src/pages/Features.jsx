import React from 'react';
import { FaSearch, FaClipboardList, FaComments } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="features bg-white text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Fitur Utama</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-container bg-red-900 text-white p-6 shadow-lg rounded-lg">
            <FaSearch className="text-4xl text-primary-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-4 text-center">Pencarian Hukum Berbasis AI</h3>
            <p className="text-center">
              Menggunakan teknologi NLP untuk memahami permintaan pengguna dan memberikan hasil pencarian yang relevan.
            </p>
          </div>
          <div className="feature-container bg-red-900 text-white p-6 shadow-lg rounded-lg">
            <FaClipboardList className="text-4xl text-primary-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-4 text-center">Prediksi Hukuman</h3>
            <p className="text-center">
              Algoritma AI mengelompokkan hasil berdasarkan jenis dan bidang hukum, serta menyediakan filter tambahan.
            </p>
          </div>
          <div className="feature-container bg-red-900 text-white p-6 shadow-lg rounded-lg">
            <FaComments className="text-4xl text-primary-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-4 text-center">Chatbot Interaktif</h3>
            <p className="text-center">
              Memfasilitasi interaksi pengguna dengan database peraturan hukum, menyediakan ringkasan dan penjelasan singkat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
