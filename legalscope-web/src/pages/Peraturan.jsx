import React, { useEffect } from "react";
import SearchForm from "../components/SearchForm";
import PeraturanCard from "../components/PeraturanCard";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import data from "./../../src/db/data.json";

const App = () => {
  const navigate = useNavigate();
  const ITEMS_PER_PAGE = 10;

  const handleNavigate = (urlId) => {
    navigate(`/peraturan-detail/${urlId}`);
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const handleNextPage = () => {
    const currentPage = Number(searchParams.get("page"));
    searchParams.set("page", currentPage + 1);

    setSearchParams(searchParams);
  };

  const handlePreviousPage = () => {
    const currentPage = Number(searchParams.get("page"));
    searchParams.set("page", currentPage - 1);

    setSearchParams(searchParams);
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
        searchParams.get("title").toLocaleLowerCase(),
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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="md:col-span-1">
          <SearchForm />
          <div className="mt-4 rounded-md bg-white p-4 shadow-md">
            <h3 className="text-lg font-bold">DATA UNDANG-UNDANG</h3>
            <div className="mt-2">
              <div className="flex justify-between">
                <span>Jumlah Peraturan</span>
                <span>1.754</span>
              </div>
              <div className="flex justify-between">
                <span>Berlaku</span>
                <span>1.525</span>
              </div>
              <div className="flex justify-between">
                <span>Tidak Berlaku</span>
                <span>229</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:col-span-3">
          {filteredData
            .slice(
              (Number(searchParams.get("page")) - 1) * ITEMS_PER_PAGE,
              ITEMS_PER_PAGE * Number(searchParams.get("page")),
            )
            .map((data, index) => (
              <Link to={`/peraturan-detail/${data.id}`}>
                <PeraturanCard
                  key={index}
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
              {searchParams.get("page")}
            </span>

            <button
              onClick={handleNextPage}
              className="flex items-center justify-center rounded bg-blue-500 p-2 text-white disabled:bg-gray-400"
              disabled={totalPages === Number(searchParams.get("page"))}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
