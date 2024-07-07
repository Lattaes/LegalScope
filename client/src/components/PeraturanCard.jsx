import React from "react";
import { Link } from "react-router-dom";
import peraturanData from "../pages/data.json";

const PeraturanCard = ({ id }) => {
  const data = peraturanData.find(item => item.id === id);

  if (!data) {
    return null; // Handle case if data with given id is not found
  }

  const { Title, Tentang, Tahun, Pemrakarsa, Status } = data;

  return (
    <Link to={`/detail-peraturan/${Title.replace(/\s+/g, '-').toLowerCase()}/${id}`} className="block mb-4">
      <div className="p-4 bg-white shadow-md rounded-md flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <div className="text-sm font-bold">{Title}</div>
          <div className="text-sm font-bold">{Tahun}</div>
        </div>
        <h3 className="text-lg font-semibold">{Title}</h3>
        <p>{Tentang}</p>
        <div>
          <span className="font-semibold">Pemrakarsa:</span> {Pemrakarsa}
        </div>
        <div className="text-green-500">{Status}</div>
      </div>
    </Link>
  );
};

export default PeraturanCard;
