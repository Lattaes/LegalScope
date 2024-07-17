import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import backgroundImage from '../assets/purple-hero.jpg';

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

    const Modal = ({ predictionResult, onClose, inputs }) => (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white p-6 rounded shadow-lg z-50">
                <h2 className="text-xl font-bold mb-4">Hasil Prediksi</h2>
                <p className="mb-4">{predictionResult}</p>
                <h3 className="text-lg font-semibold">Data yang Dimasukkan:</h3>
                <ul className="list-disc list-inside mb-4">
                    {Object.entries(inputs).map(([key, value]) => (
                        <li key={key}>{key}: {value}</li>
                    ))}
                </ul>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
                    Tutup
                </button>
            </div>
        </div>
    );

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
                            <h1 className="text-4xl font-bold text-white">Prediksi Hukum</h1>
                            <div className="max-auto">
                                <p className="mt-8 text-gray-100">Gunakan alat prediksi hukum kami untuk mendapatkan wawasan mengenai hasil hukum potensial berdasarkan data yang Anda masukkan.</p>
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

                    {/* Content Section */}
                    <div className="container mx-auto p-4 bg-white rounded-md shadow gap-4">
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
                                        className={`mt-2 overflow-hidden transition-all duration-300 ${visibleDescriptions[label] ? "max-h-full opacity-100" : "max-h-0 opacity-0"
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
                        
                        {/* Prediction Button Section */}
                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 rounded-lg focus:outline-none"
                                onClick={handleSubmit}
                            >
                                Prediksi
                            </button>
                        </div>
                    </div>

                    {/* Modal Section */}
                    {showModal && (
                        <Modal predictionResult={predictionResult} onClose={closeModal} inputs={inputs} />
                    )}
                    <br></br>
                </div>
            </div>
        </main>
    );
}

export default Prediksi;
