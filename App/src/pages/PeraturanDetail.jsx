import React from "react";
import PeraturanDetail from "../components/PeraturanDetail";

const App = () => {
  const detailData = {
    title:
      "Undang-undang Nomor 2 Tahun 2024 Tentang Provinsi Daerah Khusus Jakarta",
    jenis: "UNDANG-UNDANG",
    pemrakarsa: "PEMERINTAH PUSAT",
    nomor: 2,
    tahun: 2024,
    tentang: "PROVINSI DAERAH KHUSUS JAKARTA",
    tempatPenetapan: "Jakarta",
    tanggalPenetapan: "25 April 2024",
    pejabat: "JOKO WIDODO",
    status: "Berlaku",
    dokumen: false,
  };

  return (
    <div className=" bg-gray-100 p-6">
      <div className="container mx-auto ">
        <PeraturanDetail detail={detailData} />
      </div>
    </div>
  );
};

export default App;
