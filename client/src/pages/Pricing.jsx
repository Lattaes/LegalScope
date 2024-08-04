import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Pricing = () => {
  return (
    <div className="w-full py-16 bg-customNavy">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold md:text-[42px] text-white">Pricing</h2>
          <p className="mt-[30px] mb-[40px] w-3/4 mx-auto text-white">
            Pilih paket yang sesuai dengan kebutuhan Anda untuk mengakses berbagai fitur pencarian dan prediksi hukum terbaik.
          </p>
        </div>
        <br></br>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300" style={{
              background: 'linear-gradient(268.12deg, rgba(254, 254, 255, 0.032) -11.04%, rgba(255, 255, 255, 0.018) 104.89%)',
              boxShadow: '0px 22px 18px rgba(0, 0, 0, 0.05)',
              borderRadius: '34px'
            }}>
            <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="Single User" />
            <h2 className="text-2xl font-bold text-center py-8 text-white">Paket Basic</h2>
            <p className="text-center text-4xl font-bold text-white">Rp30.000,-</p>
            <div className="text-center font-medium text-white">
              <p className="py-2 border-b mx-8 mt-8">Akses Pencarian Peraturan Hukum</p>
              <p className="py-2 border-b mx-8">Prediksi Kasus Hukum</p>
              <p className="py-2 border-b mx-8">Batas 100 Pertanyaan/Bulan</p>
              <p className="py-2 border-b mx-8">1 Pengguna</p>
            </div>
            <button className="bg-customBeige w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Mulai Uji Coba</button>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300" style={{
              boxShadow: '0px 22px 18px rgba(0, 0, 0, 0.05)',
              borderRadius: '34px'
            }}>
            <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Double} alt="Double User" />
            <h2 className="text-2xl font-bold text-center py-8">Paket Standard</h2>
            <p className="text-center text-4xl font-bold">Rp60.000,-</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">Akses Pencarian Peraturan Hukum</p>
              <p className="py-2 border-b mx-8">Prediksi Kasus Hukum</p>
              <p className="py-2 border-b mx-8">Konsultasi Hukum dengan Pengacara</p>
              <p className="py-2 border-b mx-8">Batas 500 Pertanyaan/Bulan</p>
              <p className="py-2 border-b mx-8">3 Pengguna</p>
            </div>
            <button className="bg-customNavy text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Mulai Uji Coba</button>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300" style={{
              background: 'linear-gradient(268.12deg, rgba(254, 254, 255, 0.032) -11.04%, rgba(255, 255, 255, 0.018) 104.89%)',
              boxShadow: '0px 22px 18px rgba(0, 0, 0, 0.05)',
              borderRadius: '34px'
            }}>
            <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple} alt="Triple User" />
            <h2 className="text-2xl font-bold text-center py-8 text-white">Paket Premium</h2>
            <p className="text-center text-4xl font-bold text-white">Rp70.000,-</p>
            <div className="text-center font-medium text-white">
              <p className="py-2 border-b mx-8 mt-8">Akses Pencarian Peraturan Hukum</p>
              <p className="py-2 border-b mx-8">Prediksi Kasus Hukum</p>
              <p className="py-2 border-b mx-8">Konsultasi Hukum dengan Pengacara</p>
              <p className="py-2 border-b mx-8">Pemberitahuan Berita Terkini</p>
              <p className="py-2 border-b mx-8">Unlimited Chat</p>
              <p className="py-2 border-b mx-8">5 Pengguna</p>
            </div>
            <button className="bg-customBeige w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Mulai Uji Coba</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;