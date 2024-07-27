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
        <div className="rounded-md bg-white p-4 shadow-md">
          <h1 className="mb-4 text-2xl font-bold">{peraturan.judul}</h1>
          <table className="w-full text-left">
            <tbody>
              {peraturan.jenis_bentuk_peraturan && (
                <tr>
                  <th className="py-2">Jenis/Bentuk Peraturan</th>
                  <td className="py-2">{peraturan.jenis_bentuk_peraturan}</td>
                </tr>
              )}
              {peraturan.pemrakarsa && (
                <tr>
                  <th className="py-2">Pemrakarsa</th>
                  <td className="py-2">{peraturan.pemrakarsa}</td>
                </tr>
              )}
              {peraturan.nomor && (
                <tr>
                  <th className="py-2">Nomor</th>
                  <td className="py-2">{peraturan.nomor}</td>
                </tr>
              )}
              {peraturan.tahun && (
                <tr>
                  <th className="py-2">Tahun</th>
                  <td className="py-2">{peraturan.tahun}</td>
                </tr>
              )}
              {peraturan.tentang && (
                <tr>
                  <th className="py-2">Tentang</th>
                  <td className="py-2">{peraturan.tentang}</td>
                </tr>
              )}
              {peraturan.tempat_penetapan && (
                <tr>
                  <th className="py-2">Tempat Penetapan</th>
                  <td className="py-2">{peraturan.tempat_penetapan}</td>
                </tr>
              )}
              {peraturan.tanggal_penetapan && (
                <tr>
                  <th className="py-2">Ditetapkan Tanggal</th>
                  <td className="py-2">{peraturan.tanggal_penetapan}</td>
                </tr>
              )}
              {peraturan.pejabat_pengundangan && (
                <tr>
                  <th className="py-2">Pejabat yang Menetapkan</th>
                  <td className="py-2">{peraturan.pejabat_pengundangan}</td>
                </tr>
              )}
              {peraturan.status && (
                <tr>
                  <th className="py-2">Status</th>
                  <td className="py-2">{peraturan.status}</td>
                </tr>
              )}
              {peraturan.dokumen_link && (
                <tr>
                  <th className="py-2">Dokumen Peraturan</th>
                  <td className="py-2">
                    <a href={peraturan.dokumen_link} className="text-blue-500 hover:underline">
                      Link
                    </a>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {peraturan.mengubah && peraturan.mengubah.length > 0 && (
            <section className="mt-6 text-left">
              <h2 className="text-xl font-semibold">Mengubah</h2>
              <ol className="list-decimal ml-8 mt-3">
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
              <h2 className="text-xl font-semibold">Dasar Hukum</h2>
              <ol className="list-decimal ml-8 mt-3">
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
