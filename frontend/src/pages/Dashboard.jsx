import React from "react";
import { Routes, Route } from "react-router-dom";
import UserProfileForm from "./dashboard/UserProfileForm";
import Tools from "./dashboard/Tools/Tools";
import BmiCalculator from "./dashboard/Tools/BmiCalculator";
import FatCalculator from "./dashboard/Tools/FatCalculator";
import BmiResult from "./dashboard/Tools/BmiResult";
import Explore from "./dashboard/Explore";
import FatResult from "./dashboard/Tools/FatResult";

function Dashboard() {
  return (
    <div>
      <Routes>
        {/* User Profile */}
        <Route path="user-profile" element={<UserProfileForm />} />

        {/* Tools main page with links */}
        <Route path="tools" element={<Tools />} />

        {/* Separate pages for calculators and results */}
        <Route path="tools/bmi" element={<BmiCalculator />} />
        <Route path="tools/bmi-result" element={<BmiResult />} />
        <Route path="tools/fat-calculator" element={<FatCalculator />} />
        <Route path="tools/fat-result" element={<FatResult />} />

        <Route path="explore" element={<Explore/>} />
      </Routes>
    </div>
  );
}

export default Dashboard;
