import React from "react";
import SearchForm from "../components/SearchForm";
import PeraturanCard from "../components/PeraturanCard";

const Peraturan = () => {
  const peraturanData = [
    {
      title: "Undang-Undang Nomor 2 Tahun 2024",
      subtitle: "Provinsi Daerah Khusus Jakarta",
      document: false,
      tags: [],
      year: 2024,
    },
    {
      title: "Undang-Undang Nomor 3 Tahun 2024",
      subtitle:
        "Perubahan Kedua Atas Undang-undang Nomor 6 Tahun 2014 Tentang Desa",
      document: false,
      tags: [],
      year: 2024,
    },
    {
      title: "Undang-Undang Nomor 1 Tahun 2024",
      subtitle:
        "Perubahan Kedua Atas Undang-undang Nomor 11 Tahun 2008 Tentang Informasi dan Transaksi Elektronik",
      document: false,
      tags: ["Pelayanan Publik", "Pers", "Telekomunikasi & Informatika"],
      year: 2024,
    },
  ];

  console.log("Peraturan Data: ", peraturanData);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <SearchForm />
          <div className="mt-4 p-4 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-bold">DATA UNDANG-UNDANG</h3>
            <div className="mt-2">
              <div className="flex justify-between">
                <span>Jumlah Peraturan</span>
                <span>1.754</span>
              </div>
              <div className="flex justify-between">
                <span>Berlaku</span>
                <span>1.525</span>
              </div>
              <div className="flex justify-between">
                <span>Tidak Berlaku</span>
                <span>229</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-3 space-y-4">
          {peraturanData.map((data, index) => (
            <PeraturanCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Peraturan;
