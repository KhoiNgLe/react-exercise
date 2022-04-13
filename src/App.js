import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "browser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);
  //Delete event button
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };
  //Close modal
  const handleClose = () => {
    setShowModal(false);
  };

  console.log(showModal);
  const subtitle = "Hello Mario";

  return (
    <div className="App">
      <Title title="Event in your area" subtitle={subtitle} />

      {/* If showEvents is true will run the right side */}
      {showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(false);
            }}
          >
            hide events
          </button>
        </div>
      )}
      {/* If showEvents is false will run the right side */}
      {!showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(true);
            }}
          >
            show events
          </button>
        </div>
      )}
      {/* Map thru event and output. If showEvents is true will run the right side  */}
      {showEvents && <EventList events ={events} handleClick = {handleClick}/>}
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal = {true}>
          <NewEventForm/>
        </Modal>
      )}
      {/* Button to show model  */}
      <button onClick={() => setShowModal(true)}>Add New Event</button>
    </div>
  );
}

export default App;
