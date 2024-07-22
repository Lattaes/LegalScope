import React, { useEffect, useState } from "react";
import SearchForm from '../components/SearchForm';
import PeraturanCard from '../components/PeraturanCard';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const DaftarPeraturan = () => {
  const navigate = useNavigate();
  const ITEMS_PER_PAGE = 10;
  const [peraturanList, setPeraturanList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleNavigate = (urlId) => {
    navigate(`/detail-peraturan/${urlId}`);
  };

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

    const fetchPeraturan = async () => {
      const jenis = searchParams.get("jenis") || "";
      const judul = searchParams.get("judul") || "";
      const tahun = searchParams.get("tahun") || "";
      const encodedJenis = encodeURIComponent(jenis); 
      console.log('Jenis Peraturan Encode', encodedJenis)
      try {
        const response = await axios.get(`http://localhost:3000/peraturan/jenis/${encodedJenis}`, 
          {params: {judul, tahun}
        });
        setPeraturanList(response.data);
      } catch (error) {
        console.error("Error fetching peraturan data:", error);
      }
    };

    fetchPeraturan();
  }, [searchParams]);

  const filteredData = peraturanList
    .filter((law) => {
      if (!searchParams.get("title")) {
        return true;
      }
      return law.judul.toLowerCase().includes(
        searchParams.get("title").toLowerCase()
      );
    })
    .filter((law) => {
      if (!searchParams.get("year")) {
        return true;
      }
      return law.tahun === Number(searchParams.get("year"));
    })
    .filter((law) => {
      if (!searchParams.get("type")) {
        return true;
      }
      return law.jenis_bentuk_peraturan === searchParams.get("type");
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
                  <span>{filteredData.filter((data) => data.status === "Berlaku").length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tidak Berlaku</span>
                  <span>{filteredData.filter((data) => data.status !== "Berlaku").length}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4 md:col-span-3">
            {filteredData
              .slice(
                (Number(searchParams.get("page")) - 1) * ITEMS_PER_PAGE,
                ITEMS_PER_PAGE * Number(searchParams.get("page"))
              )
              .map((data) => (
                <Link to={`/detail-peraturan/${data._id}`} key={data._id}>
                  <PeraturanCard
                    title={data.judul}
                    subtitle={data.tentang}
                    year={data.tahun}
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
