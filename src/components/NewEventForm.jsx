import React, { useState } from "react";
import "./NewEventForm.css";
const NewEventForm = ({ addEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 10000),
    };
    console.log(event);
    addEvent(event);
    resetForm();
  };
  return (
    <div>
      <form className="new-event-form" onSubmit={handleSubmit}>
        <label>
          Event Title:
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </label>
        <label>
          <span>Event Date:</span>
          <input
            type="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            value={date}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewEventForm;
