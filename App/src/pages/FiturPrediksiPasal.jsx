import React from 'react';
import PrediksiImage from '../assets/prediksi.jpg';

const FiturPrediksiPasal = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center order-2 md:order-1'>
          <p className='text-customMaroon font-bold '>PLATFORM HUKUM CERDAS</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Prediksi Pasal KUHP berdasarkan Kasus</h1>
          <p>
          Menganalisis kasus-kasus hukum yang diinput oleh pengguna dan memprediksi pasal-pasal dalam Kitab Undang-Undang Hukum Pidana (KUHP) yang relevan. 
          Fitur ini dirancang untuk membantu pengacara, jaksa, dan penegak hukum lainnya dalam 
          mengidentifikasi pasal-pasal yang tepat untuk diterapkan dalam kasus tertentu.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Explore Now</button>
        </div>
        <img className='w-[500px] mx-auto my-4 order-1 md:order-2' src={PrediksiImage} alt='Prediksi Pasal KUHP' />
      </div>
    </div>
  );
};

export default FiturPrediksiPasal;
