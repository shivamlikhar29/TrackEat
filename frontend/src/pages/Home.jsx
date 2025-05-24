
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Track. Improve. Thrive.
      </h1>

      <div className="flex space-x-4">
        <button
          onClick={() => navigate('/register')}
          className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Register
        </button>

        <button
          onClick={() => navigate('/login')}
          className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
        >
          Login
        </button>
      </div>
    </div>);
}

export default Home;
