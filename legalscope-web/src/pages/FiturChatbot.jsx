import React from 'react';
import ChatbotImage from '../assets/chatbot.jpg';

const FiturChatbot = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={ChatbotImage} alt='Chatbot Interaktif' />
        <div className='flex flex-col justify-center'>
          <p className='text-customMaroon font-bold '>PLATFORM HUKUM CERDAS</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Chatbot Interaktif Seputar Hukum Pidana</h1>
          <p>
          Chatbot ini dirancang untuk memberikan informasi dan penjelasan mengenai berbagai aspek hukum pidana dengan cara yang mudah dipahami oleh pengguna. 
          Fitur ini bermanfaat bagi masyarakat umum, pelajar, dan profesional hukum yang membutuhkan jawaban cepat dan akurat mengenai hukum pidana.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default FiturChatbot;
