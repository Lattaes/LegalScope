import React from "react";
import { FaFilePdf, FaLock } from "react-icons/fa";

const PeraturanDetail = ({ detail }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">{detail.title}</h1>
      <table className="w-full text-left">
        <tbody>
          <tr>
            <th className="py-2">Jenis/Bentuk Peraturan</th>
            <td className="py-2">{detail.jenis}</td>
          </tr>
          <tr>
            <th className="py-2">Pemrakarsa</th>
            <td className="py-2">{detail.pemrakarsa}</td>
          </tr>
          <tr>
            <th className="py-2">Nomor</th>
            <td className="py-2">{detail.nomor}</td>
          </tr>
          <tr>
            <th className="py-2">Tahun</th>
            <td className="py-2">{detail.tahun}</td>
          </tr>
          <tr>
            <th className="py-2">Tentang</th>
            <td className="py-2">{detail.tentang}</td>
          </tr>
          <tr>
            <th className="py-2">Tempat Penetapan</th>
            <td className="py-2">{detail.tempatPenetapan}</td>
          </tr>
          <tr>
            <th className="py-2">Ditetapkan Tanggal</th>
            <td className="py-2">{detail.tanggalPenetapan}</td>
          </tr>
          <tr>
            <th className="py-2">Pejabat yang Menetapkan</th>
            <td className="py-2">{detail.pejabat}</td>
          </tr>
          <tr>
            <th className="py-2">Status</th>
            <td className="py-2">{detail.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PeraturanDetail;
