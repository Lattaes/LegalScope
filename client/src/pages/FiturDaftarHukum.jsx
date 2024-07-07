import React from 'react';
import Daftar from '../assets/daftar.png';
import GradientButton from '../components/GradientButton';

const FiturDaftarHukum = () => {
  return (
    <section className="w-full bg-[#072439] py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-10 items-center justify-evenly">
        <div className="left justify-self-center">
          <img className="w-[500px] mx-auto my-4" src={Daftar} alt="Daftar Peraturan" />
        </div>
        <div className="right text-white">
          <h2 className="font-bold text-4xl leading-[52px] lg:text-[42px]">
            Daftar Peraturan Hukum di Indonesia
          </h2>
          <p className="font-normal my-8 text-base">
            Fitur ini menyediakan akses lengkap dan terorganisir ke seluruh peraturan hukum yang berlaku di Indonesia.
            Pengguna dapat mencari dan menemukan peraturan-peraturan hukum seperti undang-undang, peraturan pemerintah,
            keputusan presiden, dan peraturan lainnya dengan mudah.
          </p>
          <GradientButton to="/peraturan" text="Explore Now" />
        </div>
      </div>
    </section>
  );
};

export default FiturDaftarHukum;