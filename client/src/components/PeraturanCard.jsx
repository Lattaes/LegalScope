import React from "react";
import { FaFilePdf, FaLock } from "react-icons/fa";

const PeraturanCard = ({ title, subtitle, document, tags, year, status }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md flex flex-col space-y-2">
        <div className="flex justify-between items-center">
        <div className="text-sm font-bold">Peraturan Indonesia</div>
        <div className="text-sm font-bold">{year}</div>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <a href="/detail-peraturan">
        <p className="text-blue-500">{subtitle}</p>
      </a>

      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-black text-white p-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="text-green-500">{status}</div>
    </div>
  );
};

export default PeraturanCard;