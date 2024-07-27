import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../context/userContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [profileImage, setProfileImage] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);

  const provinces = [
    'Aceh', 'Bali', 'Banten', 'Bengkulu', 'Central Java', 'Central Kalimantan', 
    'Central Sulawesi', 'East Java', 'East Kalimantan', 'East Nusa Tenggara', 
    'Gorontalo', 'Jakarta', 'Jambi', 'Lampung', 'Maluku', 'North Kalimantan', 
    'North Maluku', 'North Sulawesi', 'North Sumatra', 'Papua', 'Riau', 
    'Riau Islands', 'Southeast Sulawesi', 'South Kalimantan', 'South Sulawesi', 
    'South Sumatra', 'West Java', 'West Kalimantan', 'West Nusa Tenggara', 
    'West Papua', 'West Sulawesi', 'West Sumatra', 'Yogyakarta'
  ];

  const citiesByProvince = {
    // ... (same as before)
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/profile');
        setUser(response.data);
        setProfileImage(response.data.profileImage);
        setDateOfBirth(response.data.dateOfBirth || '');
        setPhoneNumber(response.data.phoneNumber || '');
        setSelectedProvince(response.data.province || '');
        setSelectedCity(response.data.city || '');
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    if (!user) {
      fetchProfile();
    }
  }, [user, setUser]);

  useEffect(() => {
    if (selectedProvince) {
      setCities(citiesByProvince[selectedProvince] || []);
      setSelectedCity('');
    }
  }, [selectedProvince]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put('/profile', {
        profileImage,
        dateOfBirth,
        phoneNumber,
        province: selectedProvince,
        city: selectedCity
      }, {
        withCredentials: true
      });
      toast.success('Profile updated successfully');
    } catch (error) {
      if (error.response) {
        toast.error(`Error updating profile: ${error.response.data.error}`);
      } else {
        toast.error('Error updating profile');
      }
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ToastContainer />
      <main className="bg-customNavy min-h-screen flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-6xl w-full">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Image */}
            <div className="flex-shrink-0 w-32 h-32">
              <img
                src={profileImage || 'https://via.placeholder.com/128'}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border border-gray-300 shadow-md"
              />
              <input
                type="file"
                onChange={handleImageChange}
                className="mt-4 block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Profile Details */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Profile</h1>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-1">
                    <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      value={user.firstName || ''}
                      readOnly
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      value={user.lastName || ''}
                      readOnly
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-1">
                    <label htmlFor="dateOfBirth" className="block text-lg font-medium text-gray-700">Date of Birth</label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="phoneNumber" className="block text-lg font-medium text-gray-700">Phone Number</label>
                    <input
                      type="text"
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-1">
                    <label htmlFor="province" className="block text-lg font-medium text-gray-700">Province</label>
                    <select
                      id="province"
                      value={selectedProvince}
                      onChange={handleProvinceChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">Select a province</option>
                      {provinces.map((province) => (
                        <option key={province} value={province}>
                          {province}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1">
                    <label htmlFor="city" className="block text-lg font-medium text-gray-700">City</label>
                    <select
                      id="city"
                      value={selectedCity}
                      onChange={handleCityChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">Select a city</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile
