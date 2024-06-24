import React from 'react';
import Daftar from '../assets/daftar.jpg';

const FiturDaftarHukum = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Daftar} alt='/Daftar Peraturan' />
        <div className='flex flex-col justify-center'>
          <p className='text-customMaroon font-bold '>PLATFORM HUKUM CERDAS</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Daftar Peraturan Hukum di Indonesia</h1>
          <p>
          Fitur ini menyediakan akses lengkap dan terorganisir ke seluruh peraturan hukum yang berlaku di Indonesia. 
          Pengguna dapat mencari dan menemukan peraturan-peraturan hukum seperti undang-undang, peraturan pemerintah, 
          keputusan presiden, dan peraturan lainnya dengan mudah.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default FiturDaftarHukum;