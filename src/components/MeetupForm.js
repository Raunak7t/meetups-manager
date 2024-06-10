import { useRef } from "react";

function MeetupForm(props) {
  const title = useRef();
  const desc = useRef();
  const imgsrc = useRef();
  const time = useRef();
  const address = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const meetupFormData = {
      title: title.current.value,
      imgsrc: imgsrc.current.value,
      time: time.current.value,
      address: address.current.value,
      desc: desc.current.value,
    };
    props.addMeetupFormData(meetupFormData);
  };
  return (
    <>
      <div className="meetup-card">
        <h2>Fill the meetup event details</h2>
        <form onSubmit={submitHandler}>
          <div className="field">
            <label htmlFor="title">Meetup Title :</label>
            <br />
            <input type="text" required id="title" ref={title} />
          </div>
          <div className="field">
            <label htmlFor="desc">Description :</label>
            <br />
            <textarea id="desc" rows="5" ref={desc} />
          </div>
          <div className="field">
            <label htmlFor="imgsrc">Image URL :</label>
            <br />
            <input type="url" id="imgsrc" ref={imgsrc} />
          </div>
          <div className="field">
            <label htmlFor="time">Time :</label>
            <br />
            <input type="datetime-local" id="time" ref={time} />
          </div>
          <div className="field">
            <label htmlFor="address">Address :</label>
            <br />
            <textarea id="desc" rows="5" ref={address} />
          </div>
          <div className="action">
            <button>Create</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default MeetupForm;
