import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function EditProfile() {
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState({
    name: '',
    email: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/profile');
        setData(response.data);
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.error);
        } else {
          toast.error('Something went wrong, please try again');
        }
        console.error('Profile Fetch Error:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('/profile', data);
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setUser(response.data.user);
        toast.success('Profile updated successfully');
        navigate('/profile');
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error('Something went wrong, please try again');
      }
      console.error('Profile Update Error:', error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 rounded-2xl shadow-lg p-5 w-full max-w-4xl">
        <h2 className="font-bold text-2xl text-center">Edit Profile</h2>
        <form onSubmit={handleSave} className="flex flex-col gap-4 mt-8">
          <input
            className="p-2 rounded-xl border"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            className="p-2 rounded-xl border"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <button type="submit" className="bg-customBeige rounded-xl text-customNavy py-2 hover:scale-105 duration-300">
            Save
          </button>
        </form>
      </div>
    </section>
  );
}

export default EditProfile;
