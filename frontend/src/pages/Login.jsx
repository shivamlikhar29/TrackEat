import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import React from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const res = await axios.post(" ", loginData, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log("Login successful:", res.data);
       alert("You are logged in successfully!");

      localStorage.setItem("token", res.data.token);
      // You can navigate to a dashboard or another page here

    } catch (error) {
      if (error.response) {
        console.error("Login error:", error.response.data);
      } else if (error.request) {
        console.error("No response from server:", error.request);
      } else {
        console.error("Error during login:", error.message);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        Don't have an account?{" "}
        <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default Login;
