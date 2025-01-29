import { createContext, useState } from "react";

const FavoritePlantContext = createContext({
    favorites: [],
    totalfavorites : 0,
    addFavorite: () => {},
    removeFavorite: () => {},
    isPlantFavorite: () => {}

});


export function FavoritePlantContextProvider({ children }){
    const [FavoritePlant, setFavoritePlant] = useState([])

    function addFavoritePlantHandler(favoritePlant){
        setFavoritePlant((prevFavoritesPlant)=> {
            return prevFavoritesPlant.concat(favoritePlant)
        })
    }

    function removeFavoritePlantHandler(plantId){
        setFavoritePlant(prevFavoritePlant =>{
            return prevFavoritePlant.filter(plant => plant.id !== plantId)
        })
    }

    function isPlantFavoriteHandler(plantId){
        return FavoritePlant.some(plant => plant.id === plantId)
    }

    const context ={
        favorites: FavoritePlant,
        totalfavorites: FavoritePlant.length,
        addFavorite : addFavoritePlantHandler,
        removeFavorite: removeFavoritePlantHandler,
        isPlantFavorite: isPlantFavoriteHandler
    }

    console.log('Updated favorites in context:', FavoritePlant);

    return (
        <FavoritePlantContext.Provider value={context}>
            {children}
        </FavoritePlantContext.Provider>
    )
}
export default FavoritePlantContext