
import "./App.css"; 
import Home from './pages/home';
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryMeals from "./pages/CategoryMeals";
import Mealdetails from "./pages/Mealdetails"
import { FavoritesProvider } from "./contexts/FavoritesContext";
import Favorites from "./pages/Favourites"
import Searchresult from "./pages/Searchresult"

const App = () => {
  return (
    <BrowserRouter>
    <FavoritesProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path={`/category/:category`} element={<CategoryMeals /> }/>
        <Route path={`/meal/:id`} element={<Mealdetails/>}/> 
        <Route path={`/favorites`} element={<Favorites/>}/> 
        <Route path={"/Search"} element={<Searchresult />}/>
        <Route patth="*" element={<h1 className="text-center mt-20"> 404-NOt Found</h1>} />
      
            
        </Routes>
        </FavoritesProvider>
    </BrowserRouter>
  );
};

export default App;
