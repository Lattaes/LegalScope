import React from 'react';
import backgroundImage from '../assets/image.jpg';
import heroImage from '../assets/hero-image.png';
import Slider from 'react-slick'; // Import react-slick
import Pricing from './Pricing';
import Features from './Features';
import ToolsLogo from './ToolsLogo';
import Footer from '../components/Footer';

const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <>
            <section className="hero bg-cover bg-center text-white py-16" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="container max-w-6xl mx-auto px-4 py-16 md:flex md:justify-between items-center">
                    <div className="md:w-1/2 text-center md:text-left">
                        <img src={heroImage} alt="Hero Image" className="mx-auto md:max-w-none w-72" />
                    </div>
                    <div className="md:w-1/2 md:pl-2 text-center md:text-left">
                        <div className="mb-4 text-gray-300">
                            Platform Pencarian Hukum Cerdas
                        </div>
                        <div className="mb-6 border-l-4 border-white pl-3 md:pl-6">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                                Berbasis Teknologi NLP Menggunakan Big Data
                            </h1>
                        </div>
                        <p className="text-gray-300">
                            Sistem ini akan memberikan kemampuan untuk mencari, mengklasifikasikan, dan memahami peraturan hukum secara efisien. Selain itu, platform ini juga dirancang untuk memfasilitasi interaksi pengguna melalui chatbot interaktif dan pencarian peraturan hukum di Indonesia.
                        </p>
                        <div className="mt-6 flex justify-center md:justify-start gap-4">
                            <a href="/login" className="bg-customGreen text-white px-6 py-3 rounded-full hover:bg-emerald-900">Get Started</a>
                            <a href="/signUp" className="bg-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-400 flex items-center">
                                Mobile App <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <ToolsLogo />
            <Features />
            <Pricing />
            <Footer />
        </>
    );
}

export default Home;
