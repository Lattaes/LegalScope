import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function EditProfile() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const toggleOldPasswordVisibility = () => {
    setShowOldPassword(!showOldPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  return (
    <div className="bg-gray-100 flex justify-center">
      <div className="w-full max-w-5xl p-5 bg-white rounded-lg shadow-md m-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Profile</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="first-name"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first-name"
              type="text"
              placeholder="First Name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="last-name"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last-name"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Address"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="contact-number"
            >
              Contact Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact-number"
              type="text"
              placeholder="Contact Number"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="occupation"
            >
              Occupation
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="occupation"
              type="text"
              placeholder="Occupation"
            />
          </div>

          <div className="relative  md:col-span-2">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="old-password"
            >
              Old Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline pr-10"
              id="old-password"
              type={showOldPassword ? "text" : "password"}
              placeholder="Old Password"
            />
            <button
              type="button"
              onClick={toggleOldPasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-700"
              style={{ right: "0.75rem" }}
            >
              {showOldPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="relative mb-4 md:col-span-2">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="new-password"
            >
              New Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline pr-10"
              id="new-password"
              type={showNewPassword ? "text" : "password"}
              placeholder="New Password"
            />
            <button
              type="button"
              onClick={toggleNewPasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-700"
              style={{ right: "0.75rem" }}
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="flex items-center justify-between md:col-span-2">
            <button
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <a href="/Profile">Save Changes</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditProfile;
