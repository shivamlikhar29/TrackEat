import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { loginUser } from "../api/auth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Username:", username, "Password:", password);

    try {
      const res = await loginUser({ username, password });
      console.log("Login successful:", res.data);
      alert("You are logged in successfully!");

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("refreshToken", res.data.refreshToken);

      navigate("/dashboard"); // ✅ Navigate to dashboard after successful login
    } catch (error) {
      if (error.response) {
        console.error("Login error:", error.response.data);
        alert("Login failed: " + JSON.stringify(error.response.data));
      } else if (error.request) {
        console.error("No response from server:", error.request);
        alert("No response from server.");
      } else {
        console.error("Error during login:", error.message);
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login to Your Account
        </h2>
{/* changes baki hai */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 mb-1">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
{/* set mail bana hai */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Login
        </button>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
