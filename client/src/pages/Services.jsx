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
    description: 'Akses cepat dan mudah ke berbagai peraturan hukum Indonesia. Temukan informasi hukum terbaru dan relevan dengan efisien.',
    link: '#',
  },
  {
    imgSrc: serviceIcon2,
    title: 'Memprediksi Kasus Hukum Pencurian',
    description: 'Analisis dan prediksi hasil kasus hukum pencurian menggunakan teknologi kecerdasan buatan untuk membantu persiapan kasus Anda.',
    link: '#',
  },
  {
    imgSrc: serviceIcon3,
    title: 'Bertanya Mengenai Hukum Pidana',
    description: 'Ajukan pertanyaan seputar hukum pidana dan dapatkan jawaban yang akurat dan terpercaya dari para ahli hukum.',
    link: '#',
  },
  {
    imgSrc: serviceIcon4,
    title: 'Pemberitahuan Berita Terkini',
    description: 'Dapatkan pemberitahuan berita hukum terkini langsung ke perangkat Anda. Tetap terinformasi dengan perkembangan hukum terbaru.',
    link: '#',
  },
  {
    imgSrc: serviceIcon5,
    title: 'Konsultasi Hukum dengan Pengacara',
    description: 'Layanan konsultasi hukum dengan pengacara berpengalaman untuk membantu Anda memahami dan menyelesaikan masalah hukum.',
    link: '#',
  },
  {
    imgSrc: serviceIcon6,
    title: 'Menyimpan Hasil Pencarian dan Prediksi',
    description: 'Simpan hasil pencarian dan prediksi kasus hukum Anda untuk referensi di masa mendatang dengan fitur penyimpanan yang aman dan mudah diakses.',
    link: '#',
  },
];

const Services = () => {
  return (
    <section className="services bg-cover bg-center text-white py-16" style={{ backgroundColor: '#072439' }}>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold md:text-[42px]">
          Layanan Kami
        </h1>
        <p className="mt-[30px] mb-[40px] w-3/4 mx-auto">
          Kami mengubah informasi menjadi wawasan yang dapat ditindaklanjuti. Kami berkomitmen untuk memahami masalah Anda dan didorong untuk mengajukan pertanyaan yang lebih baik demi hasil yang lebih baik.
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
                <a className="no-underline text-white hover:underline hover:text-violet-500 duration-500" href={service.link}>Pelajari lebih lanjut</a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;