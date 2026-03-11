import React from 'react'

const FavouriteButton = ({meal ,onToggle,isFav =true }) => {

  return <button onClick={(e) => { onToggle(meal);}} 
  className={`cursor-pointer absolute right-2 top-1 py-1 px-3 rounded-full hover:transition-shadow ${isFav ?"bg-red-500 text-white" : "bg-white/80 text-gray-800"} text-xl`}>{isFav ? "♥︎" : " ♡"} 
  </button>;
  
};

export default FavouriteButton
