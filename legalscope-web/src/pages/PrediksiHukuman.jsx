import React from "react";
import Dropdown from "../components/Dropdown";

function PrediksiHukuman() {
  const categories = {
    "JENIS KELAMIN KORBAN": ["LAKI-LAKI", "PEREMPUAN"],
    "USIA KORBAN": ["REMAJA", "DEWASA", "LANSIA", "MANULA"],
    "TEMPAT KEJADIAN PENCURIAN": [
      "AREA PARKIR",
      "JALAN RAYA",
      "HALAMAN RUMAH",
      "DALAM RUMAH",
      "GANG RUMAH",
      "SEKOLAH",
      "AREA JALAN RAYA",
      "PARKIRAN RUMAH",
    ],
    "DAERAH PERISTIWA": ["PERKOTAAN", "PEDESAAN", "PINGGIRAN KOTA"],
    "WAKTU KEJADIAN": ["PAGI", "SIANG", "SORE", "DINI HARI", "MALAM"],
    "HARI KEJADIAN": [
      "SENIN",
      "SELASA",
      "RABU",
      "KAMIS",
      "JUMAT",
      "SABTU",
      "MINGGU",
    ],
    "PELAKU MENGGUNAKAN ALAT": ["YA", "TIDAK"],
    "SASARAN KEJAHATAN": ["GABUNGAN", "BENDA BERGERAK", "BENDA TIDAK BERGERAK"],
    "JUMLAH KERUGIAN": ["BESAR", "KECIL"],
    "MODUS OPERANDI": [
      "MERUSAK KUNCI",
      "MERAMPAS",
      "MENGAMBIL",
      "MERUSAK RUMAH",
      "MENGANCAM",
      "PECAH KACA",
      "MERUSAK ATM",
      "MERUSAK BERANGKAS",
      "MENYELINAP",
      "PANJAT TEMBOK",
    ],
    "JENIS PENCURIAN": ["CURAT", "CURAS", "CUBIS"],
  };

  const handleSelect = (category, option) => {
    console.log(`${category}: ${option}`);
  };

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
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {Object.entries(categories).map(([label, options]) => (
          <Dropdown
            key={label}
            label={label}
            options={options}
            onSelect={(option) => handleSelect(label, option)}
          />
        ))}
      </div>
      <div className="container flex round justify-end mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 round text-white font-bold py-2 px-4 rounded-lg w-40">
          Start
        </button>
      </div>
    </div>
  );
}

export default PrediksiHukuman;
