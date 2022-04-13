import React, { useState } from "react";
import "./NewEventForm.css";
const NewEventForm = () => {
  const [title, setTitle] = useState("");
  const [date,setDate] =useState("")
//   const handleChange = (e) => {
//     setTitle(e.target.value)
//   };
  return (
    <div>
      <form className="new-event-form">
        <label>
          Event Title:
          <input type="text" onChange={(e)=>{setTitle(e.target.value)}} />
        </label>
        <label>
          <span>Event Date:</span>
          <input type="date" onChange={(e)=>{setDate(e.target.value)}}/>
        </label>
        <button>Submit</button>
      </form>
      <p>title - {title}, date - {date}</p>
    </div>
  );
};

export default NewEventForm;
