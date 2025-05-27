// src/components/MealLogger.jsx

import React, { useState, useEffect } from 'react';
import { fetchNutritionData } from '../../../api/nutritionApi';

const MealLogger = () => {
  const [food, setFood] = useState('');
  const [mealType, setMealType] = useState('breakfast');
  const [selectedDate, setSelectedDate] = useState('');
  const [weekDates, setWeekDates] = useState([]);
  const [loggedMeals, setLoggedMeals] = useState([]);

  useEffect(() => {
    const today = new Date();
    const startOfWeek = today.getDate() - today.getDay() + 1; // Monday as start
    const dates = [];

    for (let i = 0; i < 7; i++) {
      const d = new Date(today.setDate(startOfWeek + i));
      dates.push({
        day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
        date: d.toISOString().split('T')[0],
      });
    }

    setWeekDates(dates);
    setSelectedDate(dates[0].date); // Default to Monday
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nutrition = await fetchNutritionData(food);
    const entry = {
      food,
      mealType,
      date: selectedDate,
      nutrition,
    };
    setLoggedMeals([...loggedMeals, entry]);
    setFood('');
  };

  return (
    <div>
      <h2>Meal Logger</h2>

      <div>
        <p>Select a day:</p>
        {weekDates.map((d) => (
          <label key={d.date}>
            <input
              type="radio"
              name="day"
              value={d.date}
              checked={selectedDate === d.date}
              onChange={() => setSelectedDate(d.date)}
            />
            {d.day} ({d.date})
          </label>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Food Item: </label>
          <input
            type="text"
            value={food}
            onChange={(e) => setFood(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Meal Type: </label>
          <label>
            <input
              type="radio"
              value="breakfast"
              checked={mealType === 'breakfast'}
              onChange={() => setMealType('breakfast')}
            />
            Breakfast
          </label>
          <label>
            <input
              type="radio"
              value="lunch"
              checked={mealType === 'lunch'}
              onChange={() => setMealType('lunch')}
            />
            Lunch
          </label>
          <label>
            <input
              type="radio"
              value="dinner"
              checked={mealType === 'dinner'}
              onChange={() => setMealType('dinner')}
            />
            Dinner
          </label>
        </div>

        <button type="submit">Log Meal</button>
      </form>

      <h3>Logged Meals:</h3>
      {loggedMeals.map((meal, index) => (
        <div key={index}>
          <p>{meal.date} - {meal.mealType.toUpperCase()}</p>
          <p>Food: {meal.food}</p>
          <p>Calories: {meal.nutrition.calories}</p>
          <p>Protein: {meal.nutrition.protein}g</p>
          <p>Carbs: {meal.nutrition.carbs}g</p>
          <p>Fat: {meal.nutrition.fat}g</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default MealLogger;
