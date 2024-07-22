import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Pricing = () => {
  return (
    <div className="w-full py-16 bg-customNavy">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold md:text-[42px] text-white">Pricing</h2>
          <p className="mt-[30px] mb-[40px] w-3/4 mx-auto text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula urna at nibh cursus, nec gravida nunc pulvinar. Vivamus eget diam at dui condimentum aliquet.
          </p>
        </div>
        <br></br>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300" style={{
              background: 'linear-gradient(268.12deg, rgba(254, 254, 255, 0.032) -11.04%, rgba(255, 255, 255, 0.018) 104.89%)',
              boxShadow: '0px 22px 18px rgba(0, 0, 0, 0.05)',
              borderRadius: '34px'
            }}>
            <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="Single User" />
            <h2 className="text-2xl font-bold text-center py-8 text-white">Single User</h2>
            <p className="text-center text-4xl font-bold text-white">$149</p>
            <div className="text-center font-medium text-white">
              <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 2 GB</p>
            </div>
            <button className="bg-customBeige w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300" style={{
              boxShadow: '0px 22px 18px rgba(0, 0, 0, 0.05)',
              borderRadius: '34px'
            }}>
            <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Double} alt="Double User" />
            <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
            <p className="text-center text-4xl font-bold">$199</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
              <p className="py-2 border-b mx-8">3 Granted Users</p>
              <p className="py-2 border-b mx-8">Send up to 10 GB</p>
            </div>
            <button className="bg-customNavy text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300" style={{
              background: 'linear-gradient(268.12deg, rgba(254, 254, 255, 0.032) -11.04%, rgba(255, 255, 255, 0.018) 104.89%)',
              boxShadow: '0px 22px 18px rgba(0, 0, 0, 0.05)',
              borderRadius: '34px'
            }}>
            <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple} alt="Triple User" />
            <h2 className="text-2xl font-bold text-center py-8 text-white">Triple User</h2>
            <p className="text-center text-4xl font-bold text-white">$299</p>
            <div className="text-center font-medium text-white">
              <p className="py-2 border-b mx-8 mt-8">2 TB Storage</p>
              <p className="py-2 border-b mx-8">5 Granted Users</p>
              <p className="py-2 border-b mx-8">Send up to 20 GB</p>
            </div>
            <button className="bg-customBeige w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;