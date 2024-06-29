import React from "react";
import { FaSearch, FaRedoAlt } from "react-icons/fa";

const SearchForm = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Pencarian Spesifik</h2>
      <form className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="judul peraturan"
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="nomor"
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="tahun"
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Undang-Undang"
        />
        <select className="w-full p-2 border rounded">
          <option>-- Pilih Pemrakarsa --</option>
        </select>
        <select className="w-full p-2 border rounded">
          <option>-- Pilih Status --</option>
        </select>
        <div className="flex space-x-2">
          <button
            type="submit"
            className="bg-red-500 text-white p-2 rounded flex-1 flex items-center justify-center"
          >
            <FaSearch className="mr-2" /> Cari
          </button>
          <button
            type="reset"
            className="bg-green-500 text-white p-2 rounded flex-1 flex items-center justify-center"
          >
            <FaRedoAlt className="mr-2" /> Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
