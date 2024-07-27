import React from 'react';
import PrediksiImage from '../assets/prediksi.png';
import GradientButton from '../components/GradientButton';

const FiturPrediksiPasal = () => {
  return (
    <section className="w-full bg-[#072439] py-16 px-4">
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-10 items-center justify-center lg:justify-start'>
        <div className='order-2 md:order-1'>
          <h1 className='text-white font-bold text-4xl leading-[52px] lg:text-[42px]'>Prediksi Jenis Hukuman berdasarkan Kasus</h1>
          <p className='text-white font-normal my-8 text-base'>
            Menganalisis kasus-kasus hukum yang diinput oleh pengguna dan memprediksi pasal-pasal dalam Kitab Undang-Undang Hukum Pidana (KUHP) yang relevan. 
            Fitur ini dirancang untuk membantu pengacara, jaksa, dan penegak hukum lainnya dalam mengidentifikasi pasal-pasal yang tepat untuk diterapkan dalam kasus tertentu.
          </p>
          <GradientButton to="/prediksi" text="Explore Now" />
        </div>
        <img className='w-[500px] mx-auto my-4 order-1 md:order-2' src={PrediksiImage} alt='Prediksi Pasal KUHP' />
      </div>
    </section>
  );
};

export default FiturPrediksiPasal;