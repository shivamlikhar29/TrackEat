import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { registerUser } from "../api/auth";

function Register() {
  const [username, setUsername] = useState("");      // changed from name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");    // changed from confirmPassword

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await registerUser({ username, email, password, password2 });  // send all fields
      console.log("Registered successfully:", res.data);
      alert("You are registered successfully!");
      // Navigate or show success message
    } catch (error) {
      if (error.response) {
        console.error("Register error:", error.response.data);
      } else if (error.request) {
        console.error("No response from server:", error.request);
      } else {
        console.error("Error during registration:", error.message);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Username</label>  {/* changed label */}
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
          <label htmlFor="password2">Confirm Password</label>  {/* changed label and id */}
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
