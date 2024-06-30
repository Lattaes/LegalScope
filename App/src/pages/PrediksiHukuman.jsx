import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

function Modal({ predictionResult, onClose, inputs }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Hasil Prediksi Jenis Pencurian:</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Keterangan:</h3>
          <ul className="list-disc list-inside">
            {Object.entries(inputs).map(([category, selectedOption]) => (
              <li key={category}>
                <strong>{category}:</strong> {selectedOption}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-gray-800">{predictionResult}</p>
        <div className="mt-4 flex justify-end space-x-4">
          <button
            className="bg-customMaroon hover:bg-red-900 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
            onClick={() => {
              onClose();
              // Handle reset inputs here if needed
            }}
          >
            Tutup
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg focus:outline-none"
            onClick={handlePrint}
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
}

function PrediksiHukuman() {
  const categories = {
    "Tempat Kejadian": [
      "Area jalan raya",
      "Area parkir",
      "Dalam rumah",
      "Gang rumah",
      "Halaman rumah",
      "Jalan raya",
      "Parkiran rumah",
      "Sekolah",
    ],
    "Waktu Kejadian": [
      "Dini hari (00.00 - 06.00)",
      "Malam (18.00 - 00.00)",
      "Pagi (06.00 - 12.00)",
      "Siang (12.00 - 15.00)",
      "Sore (15.00 - 18.00)",
    ],
    "Pelaku Menggunakan Alat": ["Ya", "Tidak"],
    "Sasaran Kejahatan": ["Benda bergerak", "Benda tidak bergerak", "Gabungan"],
    "Jumlah Kerugian": ["Besar (<= Rp. 12.000.000)", "Kecil (> Rp. 12.000.000)"],
    "Modus Operandi": [
      "Mengambil",
      "Mengancam",
      "Menyelinap",
      "Merampas",
      "Merusak ATM",
      "Merusak brankas",
      "Merusak kunci",
      "Merusak rumah",
      "Panjat tembok",
      "Pecah kaca",
    ],
  };

  const [predictionResult, setPredictionResult] = useState("");
  const [visibleDescriptions, setVisibleDescriptions] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleSelect = (category, option) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [category]: option,
    }));
  };

  const handleSubmit = () => {
    // Mock prediction result
    setPredictionResult("CURAT (Pencurian Dengan Pemberatan)");
    setShowModal(true); // Tampilkan modal saat hasil prediksi tersedia
  };

  const toggleDescription = (category) => {
    setVisibleDescriptions((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const closeModal = () => {
    setShowModal(false);
    setInputs({}); // Reset inputs when closing modal
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
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
      <div className="container mx-auto p-4 bg-white rounded shadow mt-8">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {Object.entries(categories).map(([label, options]) => (
            <div key={label} className="mb-4">
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-semibold">{label}</h3>
                <button
                  type="button"
                  className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                  onClick={() => toggleDescription(label)}
                >
                  {visibleDescriptions[label] ? "▲" : "▼"}
                </button>
              </div>
              <Dropdown
                label={label}
                options={options}
                onSelect={(option) => handleSelect(label, option)}
              />
              <div
                className={`mt-2 overflow-hidden transition-all duration-300 ${
                  visibleDescriptions[label] ? "max-h-full opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {label === "Sasaran Kejahatan" && (
                  <div className="p-4 bg-gray-100 border border-gray-300 rounded">
                    <p className="text-gray-700">
                      <strong>Benda bergerak:</strong> Benda yang dapat dipindahkan atau
                      digerakkan dari satu tempat ke tempat lain. Contohnya seperti uang,
                      perhiasan, kendaraan, barang elektronik, dan lainnya.
                    </p>
                    <p className="text-gray-700">
                      <strong>Benda tidak bergerak:</strong> Merujuk pada benda yang tidak
                      dapat dipindahkan tanpa merusak atau mengubah bentuknya. Benda ini baru
                      dapat menjadi objek pencurian jika telah terlepas dari benda tetap menjadi
                      benda bergerak. Contohnya seperti pohon yang telah ditebang, daun pintu
                      rumah yang dilepas, dan lainnya.
                    </p>
                  </div>
                )}
                {label === "Jumlah Kerugian" && (
                  <div className="p-4 bg-gray-100 border border-gray-300 rounded">
                    <p className="text-gray-700">
                      <strong>Besar:</strong> Jumlah kerugian lebih dari Rp. 12.000.000.
                    </p>
                    <p className="text-gray-700">
                      <strong>Kecil:</strong> Jumlah kerugian kurang dari atau sama dengan Rp. 12.000.000.
                    </p>
                  </div>
                )}
                {label === "Pelaku Menggunakan Alat" && (
                  <div className="p-4 bg-gray-100 border border-gray-300 rounded">
                    <p className="text-gray-700">
                      <strong>Ya:</strong> Pelaku menggunakan alat untuk melakukan kejahatan.
                    </p>
                    <p className="text-gray-700">
                      <strong>Tidak:</strong> Pelaku tidak menggunakan alat untuk melakukan kejahatan.
                    </p>
                  </div>
                )}
                {label === "Tempat Kejadian" && (
                  <div className="p-4 bg-gray-100 border border-gray-300 rounded">
                    <p className="text-gray-700">
                      Informasi mengenai tempat atau lokasi di mana kejadian pencurian terjadi.
                    </p>
                  </div>
                )}
                {label === "Waktu Kejadian" && (
                  <div className="p-4 bg-gray-100 border border-gray-300 rounded">
                    <p className="text-gray-700">
                      Informasi mengenai waktu atau jam kejadian pencurian terjadi.
                    </p>
                  </div>
                )}
                {label === "Modus Operandi" && (
                  <div className="p-4 bg-gray-100 border border-gray-300 rounded">
                    <p className="text-gray-700">
                      Informasi mengenai cara atau metode yang digunakan pelaku untuk melakukan kejahatan.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </form>
      </div>
      <div className="container flex justify-end mt-4">
        <button
          className="bg-customMaroon hover:bg-red-900 text-white font-bold py-2 px-8 rounded-lg focus:outline-none"
          onClick={handleSubmit}
        >
          Start
        </button>
      </div>
      <br />
      {showModal && (
        <Modal predictionResult={predictionResult} onClose={closeModal} inputs={inputs} />
      )}
    </div>
  );
}

export default PrediksiHukuman;
