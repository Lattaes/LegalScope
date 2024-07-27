import React from 'react';
import serviceIcon from '../assets/services/daftar.png';
import serviceIcon2 from '../assets/services/prediksi.png';
import serviceIcon3 from '../assets/services/chatbot.png';
import serviceIcon4 from '../assets/services/pemberitahuan.png';
import serviceIcon5 from '../assets/services/konsultasi.png';
import serviceIcon6 from '../assets/services/bookmark.png';

const services = [
  {
    imgSrc: serviceIcon,
    title: 'Pencarian Peraturan Hukum Indonesia',
    description: 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
    link: '#',
  },
  {
    imgSrc: serviceIcon2,
    title: 'Memprediksi Kasus Hukum Pencurian',
    description: 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
    link: '#',
  },
  {
    imgSrc: serviceIcon3,
    title: 'Bertanya Mengenai Hukum Pidana',
    description: 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
    link: '#',
  },
  {
    imgSrc: serviceIcon4,
    title: 'Pemberitahuan Berita Terkini',
    description: 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
    link: '#',
  },
  {
    imgSrc: serviceIcon5,
    title: 'Konsultasi Hukum dengan Pengacara',
    description: 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
    link: '#',
  },
  {
    imgSrc: serviceIcon6,
    title: 'Menyimpan Hasil Pencarian dan Prediksi',
    description: 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
    link: '#',
  },
];

const Services = () => {
  return (
    <section className="services bg-cover bg-center text-white py-16" style={{ backgroundColor: '#072439' }}>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold md:text-[42px]">
          Our Service
        </h1>
        <p className="mt-[30px] mb-[40px] w-3/4 mx-auto">
          We turn information into actionable insights. We work to understand your issues and are driven to ask better questions in the pursuit of making work.
        </p>
        <div className="cards flex justify-center gap-x-7 gap-y-10 flex-wrap">
          {services.map((service, index) => (
            <div key={index} className="card w-[370px] px-6 py-9 text-center hover:scale-105 duration-300" style={{
              background: 'linear-gradient(268.12deg, rgba(254, 254, 255, 0.032) -11.04%, rgba(255, 255, 255, 0.018) 104.89%)',
              boxShadow: '0px 22px 18px rgba(0, 0, 0, 0.05)',
              borderRadius: '34px'
            }}>
              <img className="pb-5 mx-auto w-20 h-24" src={service.imgSrc} alt={service.title} />
              <h2 className="text-2xl font-medium pb-4">{service.title}</h2>
              <p className="text-base pb-6">{service.description}</p>
              <button>
                <a className="no-underline text-white hover:underline hover:text-violet-500 duration-500" href={service.link}>Learn more</a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
