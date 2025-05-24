import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");

    // ✅ Safe redirect to Home
    navigate("/", { replace: true });
  };

<<<<<<< HEAD
  return (
    <button onClick={handleLogout}
   className="px-7 py-3 mt-4 bg-green-600 text-white rounded hover:bg-green-700 transition">
      Logout
    </button>
  );
}
=======
  return <button onClick={handleLogout}>Logout</button>;
};
>>>>>>> 50a423d9a5620825b55eec68ae25dcb627447fde

export default LogoutButton;
