import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FatResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fatPercentage } = location.state || {};

  if (!fatPercentage) {
    return <p>No fat data found. Please calculate first.</p>;
  }

  const getFeedback = (fat) => {
    const fatValue = parseFloat(fat);
    if (fatValue < 6) return "Extremely low body fat – not healthy.";
    if (fatValue >= 6 && fatValue < 14) return "Athletic/fit range – very healthy.";
    if (fatValue >= 14 && fatValue < 24) return "Healthy range.";
    if (fatValue >= 24 && fatValue < 31) return "Slightly above average – consider lifestyle changes.";
    return "High body fat – may indicate obesity. Consider consulting a healthcare provider.";
  };

  return (
    <div>
      <h2>Fat Percentage Result</h2>
      <p><strong>Estimated Body Fat %:</strong> {fatPercentage}%</p>
      <p><strong>Feedback:</strong> {getFeedback(fatPercentage)}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default FatResult;
