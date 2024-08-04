import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const PeraturanDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [peraturan, setPeraturan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPeraturan = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/peraturan/${params.id}`);
        setPeraturan(response.data);
      } catch (err) {
        setError(err);
        navigate(-1); // Redirect to the previous page on error
      } finally {
        setLoading(false);
      }
    };

    fetchPeraturan();
  }, [params.id, navigate]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {peraturan && (
        <div className="rounded-md bg-slate-700 p-4 shadow-md max-w-6xl m-auto px-8 py-5">
          <h3 className="mb-4 text-2xl font-bold text-white">{peraturan.judul}</h3>
          <hr className="mb-4"/>
          <table className="w-full text-left">
            <tbody>
              {peraturan.jenis_bentuk_peraturan && (
                <tr>
                  <th className="py-2 text-white">Jenis/Bentuk Peraturan</th>
                  <td className="py-2 text-white">{peraturan.jenis_bentuk_peraturan}</td>
                </tr>
              )}
              {peraturan.pemrakarsa && (
                <tr>
                  <th className="py-2 text-white">Pemrakarsa</th>
                  <td className="py-2 text-white">{peraturan.pemrakarsa}</td>
                </tr>
              )}
              {peraturan.nomor && (
                <tr>
                  <th className="py-2 text-white">Nomor</th>
                  <td className="py-2 text-white">{peraturan.nomor}</td>
                </tr>
              )}
              {peraturan.tahun && (
                <tr>
                  <th className="py-2 text-white">Tahun</th>
                  <td className="py-2 text-white">{peraturan.tahun}</td>
                </tr>
              )}
              {peraturan.tentang && (
                <tr>
                  <th className="py-2 text-white">Tentang</th>
                  <td className="py-2 text-white">{peraturan.tentang}</td>
                </tr>
              )}
              {peraturan.tempat_penetapan && (
                <tr>
                  <th className="py-2 text-white">Tempat Penetapan</th>
                  <td className="py-2 text-white">{peraturan.tempat_penetapan}</td>
                </tr>
              )}
              {peraturan.tanggal_penetapan && (
                <tr>
                  <th className="py-2 text-white">Ditetapkan Tanggal</th>
                  <td className="py-2 text-white">{peraturan.tanggal_penetapan}</td>
                </tr>
              )}
              {peraturan.pejabat_pengundangan && (
                <tr>
                  <th className="py-2 text-white">Pejabat yang Menetapkan</th>
                  <td className="py-2 text-white">{peraturan.pejabat_pengundangan}</td>
                </tr>
              )}
              {peraturan.status && (
                <tr>
                  <th className="py-2 text-white">Status</th>
                  <td className="py-2 text-white">{peraturan.status}</td>
                </tr>
              )}
              {peraturan.dokumen_link && (
                <tr>
                  <th className="py-2 text-white">Dokumen Peraturan</th>
                  <td className="py-2">
                    <a href={peraturan.dokumen_link} className="text-blue-300 hover:underline">
                      Link
                    </a>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {peraturan.mengubah && peraturan.mengubah.length > 0 && (
            <section className="mt-6 text-left">
              <h2 className="text-xl font-semibold text-white">Mengubah</h2>
              <ol className="list-decimal ml-8 mt-3 text-white">
                {peraturan.mengubah.map((item) => (
                  <li key={item._id}>
                    {item.text}
                  </li>
                ))}
              </ol>
            </section>
          )}
          {peraturan.dasar_hukum && peraturan.dasar_hukum.length > 0 && (
            <section className="mt-6 text-left">
              <h2 className="text-xl font-semibold text-white">Dasar Hukum</h2>
              <ol className="list-decimal ml-8 mt-3 text-white">
                {peraturan.dasar_hukum.map((item) => (
                  <li key={item._id}>
                    {item.text}
                  </li>
                ))}
              </ol>
            </section>
          )}
        </div>
      )}
    </>
  );
};

export default PeraturanDetail;
