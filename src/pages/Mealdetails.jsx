import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMealById } from "../api/mealdb";
import LoadingSpinner from "../components/Loadingspinner";
import { useFavorites } from "../contexts/FavoritesContext";
import FavouriteButton from "../components/FavouriteButton";

const MealDetail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toggle, isFavorite } = useFavorites();
  useEffect(() => {
    setLoading(true);
    fetchMealById(id)
      .then((res) => setMeal(res.data.meals?.[0] || null))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);
  if (loading) return <LoadingSpinner />;
  if (!meal)return <p className="text-center text-xl mt-20 text-gray-600">Meal not found. </p>
  const ingredients =[];
  for(let i=1;i<=20; i++){
    const ing = meal[`strIngredient${i}`];
    if(ing?.trim()) ingredients.push(`${meal[`strMeasure${i}`]} ${ing}`);

  } 
   return <div className="max-w-4xl mx-auto p-6">
    <h1 className="text-2xl md:text-2xl font-semibold text-emerald-900 text-center mb-8">{meal.strMeal}</h1>
    <div className="grid md:grid-cols-2 gap-10">
      <div className="relative">
        <img src={meal.strMealThumb} alt={meal.strMeal}
        className="w-full rounded shadow-sm"/>
        <div className="absolute top-2 right-2">
          <FavouriteButton meal={meal} onToggle={toggle}
          idFav={isFavorite(meal.idMeal)} />
        </div>
      </div>
      <div>
      <div className="flex gap-4 text-sm">
        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">{meal.strArea}</span>
        <span className="px-4 py-2 bg-blue-100 text-green-700 rounded-full font-medium">{meal.strCategory}</span>
      </div>
      <div>
        <h2 className="text-1xl font-semibold text-gray-800 mb-4"></h2>
        <ul className="space-y-1">
          {ingredients.map((item, index) =>(
            <li key={index} className="flex gap-3 items-center">
              <span>*</span>
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      {meal.strYoutube &&(<a href={meal.strYoutube} target="_blank" className="inline-block bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition">Watch Viedoes</a>)}

      </div>
    </div>
    <div>
      <h2>Instruction</h2>
      <div>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
   </div>

  return <div>MealDetail</div>;
};

export default MealDetail;