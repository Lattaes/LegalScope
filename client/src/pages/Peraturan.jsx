import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import backgroundImage from '../assets/purple-hero.jpg';

function Peraturan() {
    const peraturanList = [
        { id: 1, title: 'Undang-Undang', link: '/peraturan/uu', borderColor: 'border-orange-500', bgColor: 'text-orange-500' },
        { id: 2, title: 'PERPPU', link: '/peraturan/perppu', borderColor: 'border-green-500', bgColor: 'text-green-500' },
        { id: 3, title: 'Peraturan Pemerintah', link: '/peraturan/pp', borderColor: 'border-blue-500', bgColor: 'text-blue-500' },
        { id: 4, title: 'Peraturan Presiden', link: '/peraturan/perpres', borderColor: 'border-red-500', bgColor: 'text-red-500' },
        { id: 5, title: 'Peraturan Menteri', link: '/peraturan/permen', borderColor: 'border-lime-500', bgColor: 'text-lime-500' },
        { id: 6, title: 'Peraturan Lembaga', link: '/peraturan/perban', borderColor: 'border-yellow-500', bgColor: 'text-yellow-500' },
        { id: 7, title: 'Peraturan Daerah', link: '/peraturan/perda', borderColor: 'border-purple-500', bgColor: 'text-purple-500' },
        { id: 8, title: 'Peraturan Lainnya', link: '/peraturan/permenkumham', borderColor: 'border-gray-500', bgColor: 'text-gray-500' },
    ];

    return (
        <main className="flex-1 flex overflow-x-hidden bg-customNavy">
            <div className="flex-1 flex">
                <div className="mx-auto sm:px-6 lg:px-8 px-4 py-6 max-w-screen-xl w-full flex flex-col gap-6">
                    {/* Title Section */}
                    <div
                        className="w-full relative overflow-hidden rounded-lg p-4 bg-customBeige flex flex-col justify-end mt-24"
                        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="m-8 z-[20]">
                            <h1 className="text-4xl font-bold text-white">Peraturan Indonesia</h1>
                            <div className="max-auto">
                                <p className="mt-8 text-gray-100">Di sini Anda dapat menemukan berbagai peraturan dan undang-undang yang berlaku di Indonesia. Silakan pilih jenis peraturan yang Anda ingin telusuri.</p>
                            </div>
                        </div>
                    </div>

                    {/* Information Section */}
                    <div>
                        <div className="w-full relative overflow-hidden rounded-lg p-4 bg-customBeige text-white dark:text-gray-900">
                            <div className="flex gap-3 items-start">
                                <span className="i-uil-info-circle flex-shrink-0 w-5 h-5"></span>
                                <div className="w-0 flex-1">
                                    <div className="text-sm opacity-90 mt-0 leading-5">Data diambil dari sumber terpercaya</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Search Section */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 flex gap-4">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Cari Peraturan..."
                                    className="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-white-900 text-gray-900 dark:text-customNavy ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 pe-9"
                                />
                                <span className="absolute inset-y-0 end-0 flex items-center pointer-events-none px-2.5">
                                    <FaSearch className="flex-shrink-0 text-gray-400 dark:text-gray-500 h-5 w-5" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {peraturanList.map((item) => (
                            <Link key={item.id} to={item.link} className="flex">
                                <div
                                    className="card w-[370px] px-2 py-3 hover:scale-105 duration-300"
                                    style={{
                                        background:
                                            'linear-gradient(268.12deg, rgba(254, 254, 255, 0.032) -11.04%, rgba(255, 255, 255, 0.018) 104.89%)',
                                        boxShadow: '0px 22px 18px rgba(0, 0, 0, 0.05)',
                                        borderRadius: '12px',
                                    }}
                                >
                                    <div className="px-4 py-5 sm:p-6">
                                        <div className="font-bold text-l uppercase text-white">{item.title}</div>
                                        <div className="text-xs text-gray-600 dark:text-gray-300 text-center">
                                            Baca Selengkapnya
                                        </div>
                                        <span
                                            className={`i-uil-book text-5xl absolute right-0 top-0 mt-6 mr-4 -z-1 ${item.bgColor}`}
                                        ></span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <br></br>
                </div>
            </div>
        </main>
    );
}

export default Peraturan;
