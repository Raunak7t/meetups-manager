import MeetupCard from "./MeetupCard";

function MeetupCardsList(props) {
  return (
    <>
      {props.meetupList.map((meetup) => {
        return <MeetupCard meetup={meetup} key={meetup.id} />;
      })}
    </>
  );
}
export default MeetupCardsList;
