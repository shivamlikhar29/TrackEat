import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../api/auth";

function Login() {
  const [username, setUsername] = useState("");  // changed from email
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
     console.log("Username:", username, "Password:", password);
    
    try {
      const res = await loginUser({ username, password });  // send username now
      console.log("Login successful:", res.data);
      alert("You are logged in successfully!");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      // Navigate to dashboard or another page
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
    
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>  
          <input
            id="username"
            type="text"     
            placeholder="Enter your username"
            value={username}
            onChange={e => setUsername(e.target.value)}
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
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default Login;
