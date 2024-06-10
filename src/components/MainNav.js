import { Link } from "react-router-dom";
import Favourites from "../store/FavContext";
import { useContext } from "react";

function MainNav() {
  const favCntx = useContext(Favourites);
  return (
    <header>
      <nav className="nav flex">
        <h1 className="logo">Raunak's Meetups</h1>
        <ul className="flex nav-links">
          <li>
            <Link to="/" className="nav-link">All Meetups</Link>
          </li>
          <li>
            <Link to="/fav" className="nav-link">Favourite Meetups{favCntx.total!==0?<span>{favCntx.total}</span>:""}</Link>
          </li>
          <li>
            <Link to="/new" className="nav-link">New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
