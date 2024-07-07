import React from "react";

const PeraturanDetail = ({ detail }) => {
  const {
    BentukPeraturan,
    Title,
    Tentang,
    Tahun,
    Pemrakarsa,
    TempatPenetapan,
    TanggalPenetapan,
    PejabatPenetapan,
    Status
  } = detail;

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">{Title}</h1>
      <table className="w-full text-left">
        <tbody>
          <tr>
            <th className="py-2">Jenis/Bentuk Peraturan</th>
            <td className="py-2">{BentukPeraturan}</td>
          </tr>
          <tr>
            <th className="py-2">Pemrakarsa</th>
            <td className="py-2">{Pemrakarsa}</td>
          </tr>
          <tr>
            <th className="py-2">Nomor</th>
            <td className="py-2">{detail.Nomor ? detail.Nomor : '-'}</td>
          </tr>
          <tr>
            <th className="py-2">Tahun</th>
            <td className="py-2">{Tahun}</td>
          </tr>
          <tr>
            <th className="py-2">Tentang</th>
            <td className="py-2">{Tentang}</td>
          </tr>
          <tr>
            <th className="py-2">Tempat Penetapan</th>
            <td className="py-2">{TempatPenetapan}</td>
          </tr>
          <tr>
            <th className="py-2">Ditetapkan Tanggal</th>
            <td className="py-2">{TanggalPenetapan}</td>
          </tr>
          <tr>
            <th className="py-2">Pejabat yang Menetapkan</th>
            <td className="py-2">{PejabatPenetapan ? PejabatPenetapan : '-'}</td>
          </tr>
          <tr>
            <th className="py-2">Status</th>
            <td className="py-2">{Status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PeraturanDetail;
