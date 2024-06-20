import React from 'react';
import backgroundImage from '../assets/image.jpg';
import heroImage from '../assets/hero-image.png'; // Import the image file
import { FaSearch, FaClipboardList, FaComments } from 'react-icons/fa'; // Import FontAwesome icons
import Slider from 'react-slick'; // Import react-slick

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
                <div className="container max-w-[800px] px-4 py-16 md:flex md:justify-between items-center">
                    <div className="md:w-1/2">
                        <img src={heroImage} alt="Hero Image" className="mx-auto md:max-w-none w-72" />
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                        <div className="mb-4 text-gray-600">
                            Platform Pencarian Hukum Cerdas
                        </div>
                        <div className="mb-6 border-l-4 border-white pl-3 md:pl-6">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                                Berbasis Teknologi NLP Menggunakan Big Data
                            </h1>
                        </div>
                        <p className="text-gray-700">
                            Sistem ini akan memberikan kemampuan untuk mencari, mengklasifikasikan, dan memahami peraturan hukum secara efisien. Selain itu, platform ini juga dirancang untuk memfasilitasi interaksi pengguna melalui chatbot interaktif dan pencarian peraturan hukum di Indonesia.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <a href="/login" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">Get Started</a>
                            <a href="/signUp" className="bg-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-400 flex items-center">
                                Mobile App <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
