import React, { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const { user, setUser, updateProfile } = useContext(UserContext);
  const [profilePicture, setProfilePicture] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
       await updateProfile({
        firstName: user.firstName,
        lastName: user.lastName,
        profilePicture
      });
      toast.success('Profile successfully updated');
    } catch (error) {
      toast.error('Failed updating profile');
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
            <div className="flex-shrink-0 w-32 h-32">
              <img
                src={profilePicture || user.profilePicture || 'https://via.placeholder.com/128'}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border border-gray-300 shadow-md"
              />
              <input
                type="file"
                onChange={handleImageChange}
                className="mt-4 block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Profile</h1>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-1">
                    <label htmlFor="userName" className="block text-lg font-medium text-gray-700">Username</label>
                    <input
                      type="text"
                      id="userName"
                      value={user.username || ''}
                      readOnly
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                    <input
                      type="text"
                      id="email"
                      value={user.email || ''}
                      readOnly
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-1">
                    <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      value={user.firstName || ''}
                      onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      value={user.lastName || ''}
                      onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
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

export default Profile;