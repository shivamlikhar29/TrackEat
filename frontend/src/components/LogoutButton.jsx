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

  return (
    <button 
      onClick={handleLogout}
      className="px-7 py-3 mt-4 bg-green-600 text-white rounded hover:bg-green-700 transition"
    >
      Logout
    </button>
  );
  
  // ❌ Remove the next line – it's a duplicate and causes the syntax error:
  // return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const LogoutButton = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("refreshToken");

//     // ✅ Safe redirect to Home
//     navigate("/", { replace: true });
//   };

//   return (
//     <button onClick={handleLogout}
//    className="px-7 py-3 mt-4 bg-green-600 text-white rounded hover:bg-green-700 transition">
//       Logout
//     </button>
//   );
// }
//   return <button onClick={handleLogout}>Logout</button>;
// };

// export default LogoutButton;

