
import { useParams } from 'react-router-dom';
import { fetchMealsByCategory } from '../api/mealdb';
import React, { useState, useEffect } from "react";
import Mealcard from "../components/Mealcard"
const CategoryMeals = () => {
  const{ category } =useParams(); 
  const[meals, setMeals] =useState([]);
  const[loading, setLoading]= useState(true);
  useEffect(()=> {
    setLoading(true);
    fetchMealsByCategory(category).then((res)=> setMeals(res.data.meals));
  },[]);
  return (
    <div className='max-w-6xl mx-auto p-4'>
      <h1 className='text-3xl font-bold capitalize mb-6 text-emerald-600'>{category}Meals</h1>
      {meals.length === 0 ?( <p className='text-center text-gray-600'>No meals found</p>) : (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {meals.map((meal, index) => (<Mealcard key={meal.idMeal} meal={meal} />
        ))}
        </div>
      )}
    </div>
  );
};

export default CategoryMeals
