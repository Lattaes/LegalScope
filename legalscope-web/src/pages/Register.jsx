import React from 'react';

function Register() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input type="text" placeholder="Username" className="mb-4 p-2 w-full border rounded"/>
        <input type="email" placeholder="Email" className="mb-4 p-2 w-full border rounded"/>
        <input type="password" placeholder="Password" className="mb-4 p-2 w-full border rounded"/>
        <button className="bg-blue-500 text-white p-2 w-full rounded">Register</button>
      </div>
    </div>
  );
}

export default Register;
