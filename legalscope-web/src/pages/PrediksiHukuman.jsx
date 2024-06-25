import React from "react";
import Dropdown from "../components/Dropdown";

function PrediksiHukuman() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Section Judul */}
      <div className="container mx-auto mb-6 md:mb-0 md:mt-6 relative">
        <div className="py-4 bg-gradient-to-r from-red-900 to-purple-900 rounded">
          <div className="md:hidden bg-gray-900/75 top-0 left-0 w-full h-full absolute"></div>
          <div className="m-8 z-20 text-center">
            <h1 className="text-4xl font-bold text-white">
              Prediksi Hukum Pidana Indonesia
            </h1>
            <div className="max-w-2xl mx-auto">
              <p className="mt-2 text-gray-100">
                Informasi mengenai prediksi hukuman pidana yang akan ditetapkan
                apabila melakukan suatu tindakan tertentu
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* Dropdown Component */}
        <Dropdown />
      </div>
    </div>
  );
}

export default PrediksiHukuman;
