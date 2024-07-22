import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phoneNumber: '',
    province: '',
    city: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/profile');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <main className="min-h-screen flex-1 flex bg-customNavy overflow-x-hidden pt-48">
      <div className="flex-1">
        <div className="mx-auto sm:px-6 lg:px-8 px-4 py-6 max-w-screen-xl w-full flex-1 flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 lg:w-1/5 flex flex-col gap-2">
            <div className="w-full flex border-l-4 pl-1.5 border-white">
              <a
                className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 
                flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 text-white dark:text-white 
                bg-white-900 hover:bg-blue-900 disabled:bg-white-900 dark:bg-white-900 dark:hover:bg-white-800 
                dark:disabled:bg-white-900 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white 
                dark:focus-visible:ring-white inline-flex items-center transition-all duration-300 ease-in-out w-full"
              >
                <span className="i-uil-setting flex-shrink-0 h-5 w-5" aria-hidden="true"></span>
                <span>Profil</span>
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex">
            <div className="flex-1 flex flex-col gap-6">
              <div className="rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 w-full">
                <div className="px-4 py-5 sm:px-6">
                  <h1 className="text-lg font-bold text-customWhite">Profil</h1>
                </div>
                <div className="px-4 py-5 sm:px-6">
                  <form className="space-y-4">
                    {/* First Name and Last Name */}
                    <div className="flex gap-4">
                      <div className="w-1/2">
                        <label htmlFor="firstName" className="block font-medium text-gray-700 dark:text-gray-200">Nama Awal</label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          className="block w-full mt-1 border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                          defaultValue={userData.firstName}
                        />
                      </div>
                      <div className="w-1/2">
                        <label htmlFor="lastName" className="block font-medium text-gray-700 dark:text-gray-200">Nama Akhir</label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          className="block w-full mt-1 border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                          defaultValue={userData.lastName}
                        />
                      </div>
                    </div>

                    {/* Date of Birth and Phone Number */}
                    <div className="flex gap-4">
                      <div className="w-1/2">
                        <label htmlFor="dateOfBirth" className="block font-medium text-gray-700 dark:text-gray-200">Tanggal Lahir</label>
                        <input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="date"
                          className="block w-full mt-1 border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                          defaultValue={userData.dateOfBirth}
                        />
                      </div>
                      <div className="w-1/2">
                        <label htmlFor="noTelp" className="block font-medium text-gray-700 dark:text-gray-200">No. Telp</label>
                        <input
                          id="noTelp"
                          name="noTelp"
                          type="text"
                          className="block w-full mt-1 border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                          defaultValue={userData.phoneNumber}
                        />
                      </div>
                    </div>

                    {/* Province and City */}
                    <div className="flex gap-4">
                      <div className="w-1/2">
                        <label htmlFor="province" className="block font-medium text-gray-700 dark:text-gray-200">Provinsi</label>
                        <button
                          id="province"
                          name="province"
                          className="relative w-full mt-1 border-0 inline-flex items-center text-left cursor-default rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 pe-9 text-gray-400 dark:text-gray-500"
                          type="button"
                        >
                          <span className="block truncate">{userData.province || 'Cari Provinsi'}</span>
                          <span className="absolute inset-y-0 end-0 flex items-center pointer-events-none px-2.5">
                            <span className="i-heroicons-chevron-down-20-solid flex-shrink-0 text-gray-400 dark:text-gray-500 h-5 w-5" aria-hidden="true"></span>
                          </span>
                        </button>
                      </div>
                      <div className="w-1/2">
                        <label htmlFor="city" className="block font-medium text-gray-700 dark:text-gray-200">Kota</label>
                        <button
                          id="city"
                          name="city"
                          className="relative w-full mt-1 border-0 inline-flex items-center text-left cursor-default rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 pe-9 text-gray-400 dark:text-gray-500"
                          type="button"
                        >
                          <span className="block truncate">{userData.city || 'Cari Kota'}</span>
                          <span className="absolute inset-y-0 end-0 flex items-center pointer-events-none px-2.5">
                            <span className="i-heroicons-chevron-down-20-solid flex-shrink-0 text-gray-400 dark:text-gray-500 h-5 w-5" aria-hidden="true"></span>
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm px-4 py-2 text-white bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 transition-all duration-300"
                      >
                        Simpan
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
