// src/api/nutritionApi.js

export const fetchNutritionData = async (foodName) => {
  const mockData = {
    apple: { calories: 95, protein: 0.5, carbs: 25, fat: 0.3 },
    banana: { calories: 105, protein: 1.3, carbs: 27, fat: 0.3 },
    rice: { calories: 200, protein: 4, carbs: 45, fat: 0.4 },
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData[foodName.toLowerCase()] || {
        calories: 0, protein: 0, carbs: 0, fat: 0,
      });
    }, 500);
  });
};
