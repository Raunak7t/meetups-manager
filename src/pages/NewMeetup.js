import { useNavigate } from "react-router-dom";

import MeetupForm from "../components/MeetupForm";

function NewMeetup() {
  const navigate = useNavigate();

  const addMeetupFormData = (data) => {
    fetch("https://react-meetups-r-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <>
      <h1>Create a new Meetup Event</h1>
      <MeetupForm addMeetupFormData={addMeetupFormData} />
    </>
  );
}
export default NewMeetup;
