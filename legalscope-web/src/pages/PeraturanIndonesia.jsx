import React from "react";

function PeraturanIndonesia() {
  // Dummy data untuk konten peraturan Indonesia
  const peraturanList = [
    { id: 1, title: "Undang-Undang" },
    { id: 2, title: "PERPPU" },
    { id: 3, title: "Peraturan Pemerintah" },
    { id: 4, title: "Peraturan Presiden" },
    { id: 5, title: "Peraturan Menteri" },
    { id: 6, title: "Peraturan Badan atau Lembaga" },
    { id: 7, title: "Peraturan Daerah" },
    { id: 8, title: "Peraturan Lainnya" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100">
      {/* Section Judul */}
      <div className="container relative mx-auto mb-6 md:mb-0 md:mt-6">
        <div className="rounded bg-gradient-to-r from-red-900 to-purple-900 py-4">
          <div className="absolute left-0 top-0 h-full w-full bg-gray-900/75 md:hidden"></div>
          <div className="z-20 m-8">
            <h1 className="text-4xl font-bold text-white">
              Peraturan Indonesia
            </h1>
            <div className="max-w-2xl">
              <p className="mt-2 text-gray-100">
                Informasi mengenai peraturan-peraturan di Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br></br>

      {/* Search Konten Peraturan Indonesia */}
      <div className="container mx-auto mb-6">
        <div className="relative">
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Cari peraturan..."
          />
          <button className="absolute right-0 top-0 mr-2 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 13l-4 4m0 0l-4-4m4 4V3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Daftar Konten Peraturan Indonesia */}
      <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {peraturanList.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-lg bg-white p-4 shadow-lg"
          >
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{item.title}</p>
            </div>
            <button className="text-blue-500 hover:text-blue-700">
              <a href="/peraturan">Baca Selengkapnya</a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PeraturanIndonesia;
