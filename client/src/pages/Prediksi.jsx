import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import backgroundImage from "../assets/purple-hero.jpg";
import axios from "axios";
import Footer from "./../components/Footer";

function Prediksi() {
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
    "Jumlah Kerugian": [
      "Kecil (<= Rp. 12.000.000)",
      "Besar (> Rp. 12.000.000)",
    ],
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

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleButtonReset = () => {
    setInputs({});
    setShowModal(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        inputs,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      setPredictionResult(response.data.prediksi);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  const handleSelectedValue = (event) => {
    console.log(event.value);
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

  const Modal = ({ predictionResult, onClose, inputs }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="z-50 rounded bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold">Hasil Prediksi</h2>
        <p className="mb-4">{predictionResult}</p>
        <h3 className="text-lg font-semibold">Data yang Dimasukkan:</h3>
        <ul className="mb-4 list-inside list-disc">
          {Object.entries(inputs).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
        <button
          className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
          onClick={onClose}
        >
          Tutup
        </button>
      </div>
    </div>
  );

  return (
    <main className="bg-customNavy flex flex-1 flex-col overflow-x-hidden">
      <div className="flex flex-1">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div
            className="bg-customBeige relative mt-24 flex w-full flex-col justify-end overflow-hidden rounded-lg p-4"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="z-[20] m-8">
              <h1 className="text-4xl font-bold text-white">Prediksi Hukum</h1>
              <div className="max-auto">
                <p className="mt-8 text-gray-100">
                  Gunakan alat prediksi hukum kami untuk mendapatkan wawasan
                  mengenai hasil hukum potensial berdasarkan data yang Anda
                  masukkan.
                </p>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div>
            <div className="bg-customBeige relative w-full overflow-hidden rounded-lg p-4 text-white dark:text-gray-900">
              <div className="flex items-start gap-3">
                <span className="i-uil-info-circle h-5 w-5 flex-shrink-0"></span>
                <div className="w-0 flex-1">
                  <div className="mt-0 text-sm leading-5 opacity-90">
                    Data diambil dari sumber terpercaya
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="container mx-auto gap-4 rounded-md bg-white p-4 shadow">
            <form className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              {Object.entries(categories).map(([label, options]) => (
                <div key={label} className="mb-4">
                  <div className="mb-2 flex items-center">
                    <h3 className="text-lg font-semibold">{label}</h3>
                    <button
                      type="button"
                      className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                      onClick={() => toggleDescription(label)}
                    >
                      {visibleDescriptions[label] ? "▲" : "▼"}
                      {/* {label} */}
                    </button>
                  </div>

                  <Dropdown
                    label={label}
                    options={options}
                    selectedValue={inputs[label]}
                    onSelect={(option) => handleSelect(label, option)}
                  />

                  <div
                    className={`mt-2 overflow-hidden transition-all duration-300 ${
                      visibleDescriptions[label]
                        ? "max-h-full opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {label === "Sasaran Kejahatan" && (
                      <div className="rounded border border-gray-300 bg-gray-100 p-4">
                        <p className="text-gray-700">
                          <strong>Benda bergerak:</strong> Benda yang dapat
                          dipindahkan atau digerakkan dari satu tempat ke tempat
                          lain. Contohnya seperti uang, perhiasan, kendaraan,
                          barang elektronik, dan lainnya.
                        </p>
                        <p className="text-gray-700">
                          <strong>Benda tidak bergerak:</strong> Merujuk pada
                          benda yang tidak dapat dipindahkan tanpa merusak atau
                          mengubah bentuknya. Benda ini baru dapat menjadi objek
                          pencurian jika telah terlepas dari benda tetap menjadi
                          benda bergerak. Contohnya seperti pohon yang telah
                          ditebang, daun pintu rumah yang dilepas, dan lainnya.
                        </p>
                      </div>
                    )}
                    {label === "Jumlah Kerugian" && (
                      <div className="rounded border border-gray-300 bg-gray-100 p-4">
                        <p className="text-gray-700">
                          <strong>Besar:</strong> Jumlah kerugian lebih dari Rp.
                          12.000.000.
                        </p>
                        <p className="text-gray-700">
                          <strong>Kecil:</strong> Jumlah kerugian kurang dari
                          atau sama dengan Rp. 12.000.000.
                        </p>
                      </div>
                    )}
                    {label === "Pelaku Menggunakan Alat" && (
                      <div className="rounded border border-gray-300 bg-gray-100 p-4">
                        <p className="text-gray-700">
                          <strong>Ya:</strong> Pelaku menggunakan alat untuk
                          melakukan kejahatan.
                        </p>
                        <p className="text-gray-700">
                          <strong>Tidak:</strong> Pelaku tidak menggunakan alat
                          untuk melakukan kejahatan.
                        </p>
                      </div>
                    )}
                    {label === "Tempat Kejadian" && (
                      <div className="rounded border border-gray-300 bg-gray-100 p-4">
                        <p className="text-gray-700">
                          Informasi mengenai tempat atau lokasi di mana kejadian
                          pencurian terjadi.
                        </p>
                      </div>
                    )}
                    {label === "Waktu Kejadian" && (
                      <div className="rounded border border-gray-300 bg-gray-100 p-4">
                        <p className="text-gray-700">
                          Informasi mengenai waktu atau jam kejadian pencurian
                          terjadi.
                        </p>
                      </div>
                    )}
                    {label === "Modus Operandi" && (
                      <div className="rounded border border-gray-300 bg-gray-100 p-4">
                        <p className="text-gray-700">
                          Informasi mengenai cara atau metode yang digunakan
                          pelaku untuk melakukan kejahatan.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </form>

            {/* Prediction Button Section */}
            <div className="mt-4 flex justify-end gap-3">
              <button
                className="rounded-lg bg-customMaroon px-8 py-2 font-bold text-white hover:bg-red-900 focus:outline-none disabled:bg-gray-400"
                onClick={handleButtonReset}
                disabled={!showModal}
              >
                Reset
              </button>
              <button
                className="rounded-lg bg-customMaroon px-8 py-2 font-bold text-white hover:bg-red-900 focus:outline-none"
                onClick={handleSubmit}
                disabled={!inputs}
              >
                Prediksi
              </button>
            </div>
          </div>

          {showModal && (
            <div className="flex flex-col rounded bg-white p-6 shadow-lg">
              <h2 className="mb-4 text-xl font-bold">Hasil Prediksi</h2>
              <p className="mb-4">{predictionResult}</p>
              <h3 className="text-lg font-semibold">Data yang Dimasukkan:</h3>
              <ul className="mb-4 list-inside list-disc">
                {Object.entries(inputs).map(([key, value]) => (
                  <li key={key}>
                    {key}: {value}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowModal(false)}
                className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
              >
                Tutup
              </button>
            </div>
          )}

          {/* Modal Section */}
          {/* {showModal && (
            <Modal
              predictionResult={predictionResult}
              onClose={closeModal}
              inputs={inputs}
            />
          )} */}
          <br></br>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Prediksi;
