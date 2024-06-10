import { useContext } from "react";
import Favourites from "../store/FavContext";

function MeetupCard(props) {
  var meetup = props.meetup;

  const favCntx = useContext(Favourites);

  var isFav = favCntx.isFav(meetup.id);

  function toggleFavStatus() {
    if (isFav) {
      favCntx.removeFav(meetup.id);
    } else {
      favCntx.addFav(meetup);
    }
  }
  return (
    <>
      <div className="meetup-card">
        <h2>{meetup.title}</h2>
        <div className="image">
          <img src={meetup.imgsrc} alt={meetup.title} />
        </div>
        <div className="content">
          <div>
            <time>{meetup.time}</time>
          </div>
          <address>{meetup.address}</address>
          <p>{meetup.desc}</p>
        </div>
        <div className="action">
          <button onClick={toggleFavStatus}>
            {isFav ? "Remove from Favourites" : "Add to Favourites"}
          </button>
        </div>
      </div>
    </>
  );
}
export default MeetupCard;
