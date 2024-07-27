import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Newsletter = () => {
    return (
        <div className="bg-[#072439] text-white py-10">
            <div className="container mx-auto px-[5%] flex flex-col max-w-[1170px] justify-center items-center hover:scale-105 duration-300">
                <h1 className="lg:text-[42px] text-3xl font-bold mt-[50px] mb-3">Dapatkan berita seputar hukum Indonesia?</h1>
                <p className="text-base text-center mb-10">Sign up to our newsletter and stay up to date.</p>
                <div className="input flex justify-between mb-10 max-w-[860px] w-[100%] p-[10px]">
                    <input
                        className="border-none py-[15px] px-[240px] bg-[#0000] outline-none text-white"
                        style={{
                            background: 'linear-gradient(268.12deg, rgba(254, 254, 255, 0.032) -11.04%, rgba(255, 255, 255, 0.018) 104.89%)',
                            boxShadow: '0px 22px 18px rgba(0, 0, 0, 0.05)',
                            borderRadius: '34px'
                        }}
                        type="text"
                        placeholder="Enter your email address"
                    />
                    <button className="btn flex items-center gap-3 py-[15px] pl-[26px] pr-[49px] rounded-[70px] opacity-90 bg-white text-[#072439]">
                        <FaPaperPlane />
                        <span>Subscribe</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
