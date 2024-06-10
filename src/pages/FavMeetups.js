import { useContext } from "react";
import Favourites from "../store/FavContext";
import MeetupCardsList from "../components/MeetupCardsList";

function FavMeetups() {
  const favCntx = useContext(Favourites);
  return (
    <>
      <h1>
        {favCntx.total === 0 ? "No Favourite Meetups" : "Favourite Meetups"}
      </h1>
      <MeetupCardsList meetupList={favCntx.favourites} />
    </>
  );
}
export default FavMeetups;
