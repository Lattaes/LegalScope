import React from 'react';
import { useParams } from 'react-router-dom';
import peraturanData from './data.json';

const DetailPeraturan = () => {
  const { id } = useParams();
  const peraturan = peraturanData.find((item) => item.id === parseInt(id));

  if (!peraturan) return <div>Peraturan tidak ditemukan</div>;

  return (
    <div className="min-h-screen bg-customNavy p-6 pt-32">
      <div className="container mx-auto text-white">
        <h1 className="text-3xl font-bold mb-4">{peraturan.Title}</h1>
        <div className="mb-4">
          <span className="font-bold">Tentang:</span> {peraturan.Tentang}
        </div>
        <div className="mb-4">
          <span className="font-bold">Tahun:</span> {peraturan.Tahun}
        </div>
        <div className="mb-4">
          <span className="font-bold">Pemrakarsa:</span> {peraturan.Pemrakarsa}
        </div>
        <div className="mb-4">
          <span className="font-bold">Status:</span> {peraturan.Status}
        </div>
      </div>
    </div>
  );
};

export default DetailPeraturan;
