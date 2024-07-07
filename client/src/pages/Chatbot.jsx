import React from 'react';
import backgroundImage from '../assets/purple-hero.jpg';

const Chatbot = () => {
  return (
    <main className="flex-1 flex overflow-x-hidden bg-customNavy">
      <div className="flex-1 flex">
        <div className="mx-auto sm:px-6 lg:px-8 px-4 py-6 max-w-screen-xl w-full flex flex-col gap-6">
          {/* Title Section */}
          <div
            className="w-full relative overflow-hidden rounded-lg p-4 bg-customBeige flex flex-col justify-end mt-24"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="m-8 z-[20]">
              <h1 className="text-4xl font-bold text-white">Chatbot Interaktif</h1>
              <div className="max-auto">
                <p className="mt-8 text-gray-100">Chatbot kami siap membantu Anda dengan pertanyaan hukum yang Anda miliki. Mulai percakapan sekarang untuk mendapatkan bantuan langsung.</p>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div>
            <div className="w-full relative overflow-hidden rounded-lg p-4 bg-customBeige text-white dark:text-gray-900">
              <div className="flex gap-3 items-start">
                <span className="i-uil-info-circle flex-shrink-0 w-5 h-5"></span>
                <div className="w-0 flex-1">
                  <div className="text-sm opacity-90 mt-0 leading-5">Data diambil dari sumber terpercaya</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Chatbot;
