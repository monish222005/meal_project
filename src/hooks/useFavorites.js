const STORAGE_KEY="mealdb_favorites";

const loadFavoritesFromStorage=()=>{
    try{
        const raw=localStorage.getItem(STORAGE_KEY);
        return raw? JSON.parse(raw ): [];
    }catch(err){
        console.log("failed to parse favorites from localstorage",err);
        return [];
        }
};

export default function useFavorites(){
    const [favorites, setFavorites] =useState(loadFavoritesFromStorage);
    useEffect(()=> {
        try{
            localStorage.setItem(STORAGE_KEY, JSON.stringify())
        }catch(err){
            console.log("failed to save faviroues",err);
        }
    },[favorites]);

    const toggle =(meal) =>{
        setFavorites((prey) =>{
            const exists=prev.some((m)=>m.idMeal ===meal.idMeal)
            return exists?prev.filter((m)=> m.idMeal !== meal.idMeal): [...prev,meal];
        });
    };
    const isFavorites = (meal)=> favorites.some((m) => m.idMeal === meal.idMeal);
    return {favorites,toggle, isFavorites};
}