import React from 'react';
import ChatbotImage from '../assets/chatbot.png';
import GradientButton from '../components/GradientButton';

const FiturChatbot = () => {
  return (
    <div className='w-full bg-[#072439] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={ChatbotImage} alt='Chatbot Interaktif' />
        <div className='flex flex-col justify-center'>
          <h1 className='text-white font-bold text-4xl leading-[52px] lg:text-[42px]'>Chatbot Interaktif Seputar Hukum Pidana</h1>
          <p className='text-white font-normal my-8 text-base'>
          Chatbot ini dirancang untuk memberikan informasi dan penjelasan mengenai berbagai aspek hukum pidana dengan cara yang mudah dipahami oleh pengguna. 
          Fitur ini bermanfaat bagi masyarakat umum, pelajar, dan profesional hukum yang membutuhkan jawaban cepat dan akurat mengenai hukum pidana.
          </p>
          <GradientButton to="/chatbot" text="Explore Now" />
        </div>
      </div>
    </div>
  );
};

export default FiturChatbot;
