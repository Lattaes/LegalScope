import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FaPhoneAlt } from "react-icons/fa";

function Profile() {
  return (
    <div className="flex h-screen w-full items-center justify-center space-x-4 bg-red-200 px-4 md:container md:mx-auto">
      <div class="flex h-[500px] w-[50%] flex-col items-center justify-center gap-6 bg-slate-500">
        <div>
          <p className="text-justify text-2xl font-semibold tracking-wide">
            Sayyid Nabil Rifki
          </p>
          <div>
            <p className="text-lg tracking-wide">Student</p>
          </div>
          <div className="mt-8">
            <FaPhoneAlt /> <p>asdoasdno</p>
          </div>
        </div>
      </div>
      <div class="flex h-[500px] w-[50%] flex-col items-center justify-center gap-6 bg-slate-500">
        <p>asdasdasd</p> <p>asdjasjdoasjdojo</p>
      </div>
    </div>
  );
}

export default Profile;
