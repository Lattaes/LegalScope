import React from "react";
import { Link, useParams } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import peraturanData from "../pages/data.json";
import PeraturanCard from "../components/PeraturanCard";

const DaftarPeraturan = () => {
  const { jenis } = useParams(); 
  const filteredPeraturan = peraturanData.filter((peraturan) => peraturan.jenis === jenis);

  return (
    <div className="min-h-screen bg-customNavy p-6 pt-32">
      <div className="container mx-auto text-left">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm font-medium text-gray-500 mb-4">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/peraturan" className="text-blue-500 hover:underline">
                Daftar Peraturan
              </Link>
              <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 17l5-5-5-5v10z" />
              </svg>
            </li>
            <li className="flex items-center">
              <span className="text-gray-600">{jenis}</span>
            </li>
          </ol>
        </nav>
        {/* End of Breadcrumb Navigation */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-1">
            <SearchForm />
            <div className="mt-4 p-4 bg-white shadow-md rounded-md">
              <h3 className="text-lg font-bold">DATA {jenis.toUpperCase()}</h3>
              <div className="mt-2">
                <div className="flex justify-between">
                  <span>Jumlah Peraturan</span>
                  <span>{filteredPeraturan.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Berlaku</span>
                  <span>{filteredPeraturan.filter((data) => data.Status === "Berlaku").length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tidak Berlaku</span>
                  <span>{filteredPeraturan.filter((data) => data.Status !== "Berlaku").length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* List of Peraturan */}
          <div className="md:col-span-3 space-y-4">
            {filteredPeraturan.map((peraturan) => (
              <PeraturanCard key={peraturan.id} id={peraturan.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaftarPeraturan;
