import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FatCalculator = () => {
  const [formData, setFormData] = useState({
    gender: "",
    height: "",
    weight: "",
    age: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateFat = (e) => {
    e.preventDefault();
    const { height, weight, age, gender } = formData;

    if (!height || !weight || !age || !gender) {
      alert("Please fill out all fields.");
      return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const genderValue = gender === "Male" ? 1 : 0;

    const fatPercentage = ((1.2 * bmi) + (0.23 * age) - (10.8 * genderValue) - 5.4).toFixed(2);

    navigate("/dashboard/tools/fat-result", {
      state: { fatPercentage },
    });
  };

  return (
    <div>
      <h2>Fat Calculator</h2>
      <form onSubmit={calculateFat}>
        <div>
          <label>
            Gender:
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              /> Female
            </label>
          </label>
        </div>

        <div>
          <label>
            Height (cm):
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Weight (kg):
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default FatCalculator;
