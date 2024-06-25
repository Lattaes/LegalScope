import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMailOutline, MdOutlineLocationOn } from "react-icons/md";
import Button from "../components/Button";

function Profile() {
  return (
    <div className="flex h-screen w-full items-center justify-center space-x-4 ">
      <div class="flex h-[500px] w-[50%] flex-col items-center justify-center gap-6">
        <div>
          <p className="text-justify text-2xl font-semibold tracking-wide">
            Sayyid Nabil Rifki
          </p>
          <div>
            <p className="text-lg tracking-wide">Student</p>
          </div>
          <div className="mt-8 flex items-center gap-2 bg-white">
            <FaPhoneAlt /> <p>+62 123123123131</p>
          </div>
          <div className="mt-8 flex items-center gap-2 bg-white">
            <FaLocationDot /> <p>BSD</p>
          </div>
          <div className="mt-8 flex items-center gap-2 bg-white">
            <MdMailOutline /> <p>asdaskd@asdkjaskdj.com</p>
          </div>
          <div className="mt-8 flex items-center gap-2  justify-start">
            <a href="/EditProfile" className="bg-indigo-600 w-full rounded-md">
              <button
                className=" w-full text-white font-[Poppins] py-2 px-6  hover:bg-indigo-400 
    duration-500"
              >
                Edit
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        class="flex h-full w-[50%] flex-col items-center justify-center gap-6 bg-customMaroon
      "
      >
        <img
          className="w-[500px] h-[500px] mx-auto rounded-lg"
          src={"/pp1.jpg"}
          alt="Profile"
        />
      </div>
    </div>
  );
}

export default Profile;
