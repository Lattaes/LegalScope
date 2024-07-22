import React, { useState } from "react";
import { FaSearch, FaRedoAlt } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [titleText, setTitleText] = useState("");
  const [yearInput, setYearInput] = useState("");
  const [typeSelect, setTypeSelect] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (titleText) {
        searchParams.set("title", titleText);
    } else {
        searchParams.delete("title");
    }

    if (yearInput) {
        searchParams.set("year", yearInput);
    } else {
        searchParams.delete("year");
    }

    if (typeSelect) {
        searchParams.set("type", typeSelect);
    } else {
        searchParams.delete("type");
    }

    searchParams.set("page", 1);
    setSearchParams(searchParams);
};

const handleReset = (e) => {
    e.preventDefault();

    searchParams.delete("title");
    searchParams.delete("year");
    searchParams.delete("type");

    setSearchParams(searchParams);
};

  return (
    <div className="rounded-md bg-white p-4 shadow-md">
      <h2 className="mb-4 text-xl font-bold">Pencarian Spesifik</h2>
      <form onReset={handleReset} onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full rounded border p-2"
          type="text"
          placeholder="judul peraturan"
          onChange={(e) => setTitleText(e.target.value)}
        />
        {/* <input
          className="w-full rounded border p-2"
          type="text"
          placeholder="nomor"
        /> */}
        <input
          className="w-full rounded border p-2"
          type="text"
          placeholder="tahun"
          onChange={(e) => setYearInput(e.target.value)}
        />
        {/* <input
          className="w-full rounded border p-2"
          type="text"
          placeholder="Undang-Undang"
        />
        <select className="w-full rounded border p-2">
          <option>-- Pilih Pemrakarsa --</option>
        </select>
        <select className="w-full rounded border p-2">
          <option>-- Pilih Status --</option>
        </select> */}
        {/* <select
          onChange={(e) => setTypeSelect(e.target.value)}
          className="w-full rounded border p-2"
        >
          {[
            "UUD",
            "TAP MPR",
            "UU",
            "UUDRT",
            "PERPPU",
            "PP",
            "PERPRES",
            "PENPRES",
            "KEPPRES",
            "INPRES",
            "PERMEN",
            "PERBAN",
            "PERDA",
          ].map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select> */}
        <div className="flex space-x-2">
          <button
            type="submit"
            className="flex flex-1 items-center justify-center rounded bg-green-500 p-2 text-white"
          >
            <FaSearch className="mr-2" /> Cari
          </button>
          <button
            type="reset"
            className="flex flex-1 items-center justify-center rounded bg-red-500 p-2 text-white"
          >
            <FaRedoAlt className="mr-2" /> Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;