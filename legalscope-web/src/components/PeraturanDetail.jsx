import React, { useEffect } from "react";
import data from "./../../src/db/data.json";
import { useParams, useNavigate } from "react-router-dom";

const PeraturanDetail = ({ detail }) => {
  const params = useParams();
  const navigate = useNavigate();

  const dataId = Number(params.id);

  const filteredData = data.filter((law) => {
    return law.id === dataId;
  });

  useEffect(() => {
    if (!params) {
      navigate(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!filteredData ? null : (
        <div className="rounded-md bg-white p-4 shadow-md">
          {!filteredData[0]?.wrapper ? null : (
            <h1 className="mb-4 text-2xl font-bold">
              {filteredData[0].wrapper}
            </h1>
          )}
          <table className="w-full text-left">
            <tr>
              <th className="py-2">Deskripsi</th>
              <td className="py-2">{filteredData[0].Title}</td>
            </tr>
            <tbody>
              {!filteredData[0]["Bentuk Peraturan"] ? null : (
                <tr>
                  <th className="py-2">Jenis/Bentuk Peraturan</th>
                  <td className="py-2">
                    {filteredData[0]["Bentuk Peraturan"]}
                  </td>
                </tr>
              )}

              {!filteredData[0].Pemrakarsa ? null : (
                <tr>
                  <th className="py-2">Pemrakarsa</th>
                  <td className="py-2">{filteredData[0].Pemrakarsa}</td>
                </tr>
              )}
              {!filteredData[0].Nomor ? null : (
                <tr>
                  <th className="py-2">Nomor</th>
                  <td className="py-2">{filteredData[0].Nomor}</td>
                </tr>
              )}
              {!filteredData[0].Tahun ? null : (
                <tr>
                  <th className="py-2">Tahun</th>
                  <td className="py-2">{filteredData[0].Tahun}</td>
                </tr>
              )}
              {!filteredData[0].Tentang ? null : (
                <tr>
                  <th className="py-2">Tentang</th>
                  <td className="py-2">{filteredData[0].Tentang}</td>
                </tr>
              )}
              {!filteredData[0]["Tempat Penetapan"] ? null : (
                <tr>
                  <th className="py-2">Tempat Penetapan</th>
                  <td className="py-2">
                    {filteredData[0]["Tempat Penetapan"]}
                  </td>
                </tr>
              )}
              {!filteredData[0]["Ditetapkan Tanggal"] ? null : (
                <tr>
                  <th className="py-2">Ditetapkan Tanggal</th>
                  <td className="py-2">
                    {filteredData[0]["Ditetapkan Tanggal"]}
                  </td>
                </tr>
              )}
              {!filteredData[0]["Pejabat Penetapan"] ? null : (
                <tr>
                  <th className="py-2">Pejabat yang Menetapkan</th>
                  <td className="py-2">
                    {filteredData[0]["Pejabat Penetapan"]}
                  </td>
                </tr>
              )}
              {!filteredData[0].Status ? null : (
                <tr>
                  <th className="py-2">Status</th>
                  <td className="py-2">{filteredData[0].Status}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default PeraturanDetail;
