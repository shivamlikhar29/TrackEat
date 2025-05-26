import React from "react";
import { Link, Outlet } from "react-router-dom";

const Tools = () => {
  return (
    <div>
      

      {/* Section 1: Core Tools */}
      <h3> Meal Log</h3>
      <ul>
        <li><Link to="meal-log">Meal Log</Link></li>
        <li><Link to="bmi">BMI Calculator</Link></li>
        <li><Link to="fat-calculator">Fat Calculator</Link></li>
      </ul>

      <hr />

      {/* Section 2: Tracker Tools */}
      <h3>Tracker</h3>
      <ul>
        <li><Link to="weight-tracker">Weight Tracker</Link></li>
        <li><Link to="water-tracker">Water Tracker</Link></li>
      </ul>

      <hr />

      {/* Section 3: Reminders */}
      <h3>Reminder</h3>
      <ul>
        <li><Link to="custom-reminder">Custom Reminder</Link></li>
      </ul>

      <Outlet /> {/* For nested route rendering */}
    </div>
  );
};

export default Tools;
