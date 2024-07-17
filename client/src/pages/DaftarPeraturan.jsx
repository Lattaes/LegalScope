import React, { useEffect } from "react";
import SearchForm from '../components/SearchForm';
import PeraturanCard from '../components/PeraturanCard';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import data from '../db/data.json';

const DaftarPeraturan = () => {
  const navigate = useNavigate();
  const ITEMS_PER_PAGE = 10;

  const handleNavigate = (urlId) => {
    navigate(`/detail-peraturan/${urlId}`);
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const handleNextPage = () => {
    const currentPage = Number(searchParams.get("page"));
    const nextPage = currentPage + 1;
    searchParams.set("page", nextPage);
    setSearchParams(new URLSearchParams(searchParams));
  };

  const handlePreviousPage = () => {
    const currentPage = Number(searchParams.get("page"));
    const prevPage = currentPage - 1;
    searchParams.set("page", prevPage);
    setSearchParams(new URLSearchParams(searchParams));
  };

  useEffect(() => {
    if (!searchParams.get("page")) {
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredData = data
    .filter((law) => {
      if (!searchParams.get("title")) {
        return true;
      }
      return law.Title.toLowerCase().includes(
        searchParams.get("title").toLowerCase()
      );
    })
    .filter((law) => {
      if (!searchParams.get("year")) {
        return true;
      }
      return law.Tahun === Number(searchParams.get("year"));
    })
    .filter((law) => {
      if (!searchParams.get("type")) {
        return true;
      }
      return law["Bentuk Peraturan"] === searchParams.get("type");
    });

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-customNavy p-6 pt-32">
      <div className="container mx-auto text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-1">
            <SearchForm />
            <div className="mt-4 p-4 bg-white shadow-md rounded-md">
              <h3 className="text-lg font-bold">DATA</h3>
              <div className="mt-2">
                <div className="flex justify-between">
                  <span>Jumlah Peraturan</span>
                  <span>{filteredData.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Berlaku</span>
                  <span>{filteredData.filter((data) => data.Status === "Berlaku").length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tidak Berlaku</span>
                  <span>{filteredData.filter((data) => data.Status !== "Berlaku").length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* List of Peraturan */}
          <div className="flex flex-col space-y-4 md:col-span-3">
            {filteredData
              .slice(
                (Number(searchParams.get("page")) - 1) * ITEMS_PER_PAGE,
                ITEMS_PER_PAGE * Number(searchParams.get("page"))
              )
              .map((data) => (
                <Link to={`/detail-peraturan/${data.id}`} key={data.id}>
                  <PeraturanCard
                    title={data.Title}
                    subtitle={data.wrapper}
                    year={data.Tahun}
                  />
                </Link>
              ))}

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handlePreviousPage}
                className="flex items-center justify-center rounded bg-blue-500 p-2 text-white disabled:bg-gray-400"
                disabled={Number(searchParams.get("page")) === 1}
              >
                Previous
              </button>

              <span className="text-xl font-semibold">
                {searchParams.get("page")} of {totalPages}
              </span>

              <button
                onClick={handleNextPage}
                className="flex items-center justify-center rounded bg-blue-500 p-2 text-white disabled:bg-gray-400"
                disabled={Number(searchParams.get("page")) === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaftarPeraturan;
