import { createContext, useState } from "react";

const Favourites = createContext({
    favourites: [],
    total: 0,
    addFav: ()=>{},
    removeFav: ()=>{},
    isFav: ()=>{}
  });

export function FavContextProvider(props) {
  const [favs, setFavs] = useState([]);
  const favourites = {
    favourites: favs,
    total: favs.length,
    addFav: addFavHandler,
    removeFav: removeFavHandler,
    isFav: isFav
  };

  function addFavHandler(fav) {
    setFavs(favs => favs.concat(fav));
  }

  function removeFavHandler(meetupId) {
    setFavs(favs => favs.filter((fav) => meetupId !== fav.id));
  }

  function isFav(meetupId) {
    return favs.some(fav => fav.id === meetupId)
  }

  return (
    <Favourites.Provider value={favourites}>
      {props.children}
    </Favourites.Provider>
  );
}
export default Favourites;
