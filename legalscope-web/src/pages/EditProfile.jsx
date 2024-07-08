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
    <div className="flex justify-center bg-gray-100">
      <div className="m-10 w-full max-w-5xl rounded-lg bg-white p-5 shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Edit Profile</h2>
        <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="first-name"
            >
              First Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="first-name"
              type="text"
              placeholder="First Name"
            />
          </div>

          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="last-name"
            >
              Last Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="last-name"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="address"
              type="text"
              placeholder="Address"
            />
          </div>

          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="contact-number"
            >
              Contact Number
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="contact-number"
              type="text"
              placeholder="Contact Number"
            />
          </div>

          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="occupation"
            >
              Occupation
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="occupation"
              type="text"
              placeholder="Occupation"
            />
          </div>

          <div className="relative md:col-span-2">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="old-password"
            >
              Old Password
            </label>
            <input
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 pr-10 leading-tight text-gray-700 shadow focus:outline-none"
              id="old-password"
              type={showOldPassword ? "text" : "password"}
              placeholder="Old Password"
            />
            <button
              type="button"
              onClick={toggleOldPasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700"
              style={{ right: "0.75rem" }}
            >
              {showOldPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="relative mb-4 md:col-span-2">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="new-password"
            >
              New Password
            </label>
            <input
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 pr-10 leading-tight text-gray-700 shadow focus:outline-none"
              id="new-password"
              type={showNewPassword ? "text" : "password"}
              placeholder="New Password"
            />
            <button
              type="button"
              onClick={toggleNewPasswordVisibility}
              className="absolute inset-y-0 bottom-0 right-0 top-0 flex items-center bg-red-500 pr-3 text-gray-700"
              style={{ right: "0.75rem" }}
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="flex items-center justify-between md:col-span-2">
            <button
              className="focus:shadow-outline rounded bg-indigo-600 px-4 py-2 font-bold text-white hover:bg-indigo-500 focus:outline-none"
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
