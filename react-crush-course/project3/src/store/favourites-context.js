import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites : [],
    totalFavorites: 0,
    addFavourite: (favourieMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meeetupId) => {}
});

export function FavoritesContextProvider({children}) {
    const [userFavorites, setUserFavorites] = useState([])

    function addFavouritesHandler(favourieMeetup){
        setUserFavorites((prevUserFavourites) => {
            return prevUserFavourites.concat(favourieMeetup)
        })
    }

    function removeFavoritesHandler(meetupId){
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meet => meet.id !== meetupId);
        })
    }

    function itemIsFavoritesHandler(meeetupId){
        return userFavorites.some(meet => meet.id === meeetupId)
    }

    const contaxt = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavourite : addFavouritesHandler,
        removeFavorite: removeFavoritesHandler,
        itemIsFavorite: itemIsFavoritesHandler
    }

    return (
        <FavoritesContext.Provider value={contaxt}>
            {children}
        </FavoritesContext.Provider>
    )
}
export default FavoritesContext;