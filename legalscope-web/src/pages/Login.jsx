import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* login container */}
      <div className="bg-gray-100 flex flex-col md:flex-row rounded-2xl shadow-lg w-full max-w-4xl p-5">
        
        {/* form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <button onClick={handleBackClick} className="mb-4 text-[#002D74] hover:underline">Back</button>
          <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
          <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>

          <form action="" className="flex flex-col gap-4 mt-8">
            <input className="p-2 rounded-xl border" type="email" name="email" placeholder="Email" />
            <div className="relative">
              <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password" />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>
            <button className="bg-customMaroon rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            <a href="#">Forgot your password?</a>
          </div>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <a href="#">Don't have an account?</a>
          </div>
        </div>

        {/* image */}
        <div className="md:w-1/2 relative">
          <img className="rounded-2xl mt-8 md:mt-0" src="https://images.unsplash.com/photo-1619771833572-325fa5664609?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Login" />

          {/* Centered content over image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-3xl font-bold">Hello, Friend!</h1>
            <p className="text-lg mt-2">Enter your personal details <br></br>
            and start journey with us</p>
            <button className="bg-customWhite text-black rounded-xl px-6 py-2 mt-4 hover:scale-105 duration-300">Daftar Sekarang</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
