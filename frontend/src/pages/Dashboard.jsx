// src/pages/Dashboard.jsx
import React from "react";
import LogoutButton from "../components/LogoutButton";

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h2 className="bg-blue-500 p-5 rounded font-semibold">Welcome to your Dashboard!</h2>
      <LogoutButton />
    </div>
  );
}

export default Dashboard;
