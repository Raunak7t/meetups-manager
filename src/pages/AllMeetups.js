import { useEffect, useState } from "react";
import MeetupCardsList from "../components/MeetupCardsList";

// const DATA = [
//   {
//     id: 1,
//     title: "First ever meetup",

//     time: "2023",
//     address: "345-34, Meetup street, Meetup nagar",
//     desc: "The meetup regarding MERN stack development.",
//   },
//   {
//     id: 2,
//     title: "Second meetup",
//     time: "3:34, 23 july 2039",
//     imgsrc: "https://placeholder.com/30",
//     address: "345-34, Meetup street, Meetup nagar",
//     desc: "The meetup regarding MERN stack development.",
//   },
// ];

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    fetch("https://react-meetups-r-default-rtdb.firebaseio.com/meetups.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        let arrayData = [];
        for (const key in data) {
          let elem = {
            id: key,
            ...data[key],
          };
          arrayData.push(elem);
        }
        setLoadedData(arrayData);
      });
  }, []);

  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <>
      <h1>All Meetups</h1>
      <MeetupCardsList meetupList={loadedData} />;
    </>
  );
}
export default AllMeetups;
