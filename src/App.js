import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";

function App() {
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

  const subtitle = "All the latest events in Marioland";

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
      {showEvents &&
        events.map((event, index) => (
          <div key={event.id}>
            <h2>
              {index}. {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}>Delete event</button>
          </div>
        ))}
      <Modal>
        <h2>10% Off Coupon Code !</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal>
    </div>
  );
}

export default App;
