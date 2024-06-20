import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Pricing = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Pricing</h2>
          <p className="mb-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula urna at nibh cursus, nec gravida nunc pulvinar. Vivamus eget diam at dui condimentum aliquet.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="Single User" />
            <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
            <p className="text-center text-4xl font-bold">$149</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 2 GB</p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Double} alt="Double User" />
            <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
            <p className="text-center text-4xl font-bold">$199</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
              <p className="py-2 border-b mx-8">3 Granted Users</p>
              <p className="py-2 border-b mx-8">Send up to 10 GB</p>
            </div>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple} alt="Triple User" />
            <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
            <p className="text-center text-4xl font-bold">$299</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">2 TB Storage</p>
              <p className="py-2 border-b mx-8">5 Granted Users</p>
              <p className="py-2 border-b mx-8">Send up to 20 GB</p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
