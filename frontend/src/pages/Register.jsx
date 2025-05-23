import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await registerUser({ username, email, password, password2 });
      console.log("Registered successfully:", res.data);

      alert("You are registered successfully!"); // ✅ Show success alert

      navigate("/login"); // ✅ Redirect to login page

    } catch (error) {
      if (error.response) {
        console.error("Register error:", error.response.data);
        alert("Registration failed: " + error.response.data.message);
      } else if (error.request) {
        console.error("No response from server:", error.request);
        alert("No response from server.");
      } else {
        console.error("Error during registration:", error.message);
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
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

        <div>
          <label htmlFor="password2">Confirm Password</label>
          <input
            id="password2"
            type="password"
            placeholder="Re-enter your password"
            value={password2}
            onChange={e => setPassword2(e.target.value)}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Register;
