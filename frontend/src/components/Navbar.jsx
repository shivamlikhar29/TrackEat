import { useNavigate } from 'react-router-dom';
import React from 'react';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <div>Track Eat</div>
      <div>
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/register')}>Register</button>
      </div>
    </nav>
  );
}

export default Navbar;
