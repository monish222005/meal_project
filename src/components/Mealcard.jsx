import { Link } from "react-router-dom"
import FavouriteButton from "./FavouriteButton"
import {useFavorites} from "../contexts/FavoritesContext";

const mealcard = ({meal }) => {
  const {toggle, isFavorite} = useFavorites();
  const fav=isFavorite(meal.idMeal);
  return (
    <div tittle={meal.strMeal} className="relative">
      <FavouriteButton meal={meal} onToggle={toggle} isFav={fav}/>
      <Link to={`/meal/${meal.idMeal}`} className="block rounded-lg overflow-hidden shadow hover:shadow-black transition">
      <img src={meal.strMealThumb} alt="" className=" w-full h-48 object-cover"/>
      <div className="p-3 text-center">
        <p className="font-medium text-gray-800 truncate">{meal.strMeal}</p>
      </div>
      </Link>
    </div>
  )
}

export default mealcard
