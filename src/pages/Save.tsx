import React, { useState } from "react";
import Calendar from "react-calendar";
import { useParams } from "react-router-dom";
import { getNotes } from "../utilities/utilities";
import LockButton from "../components/LockButton";
import HomeButton from "../components/HomeButton";

export default function Save() {
  const params = useParams();
  const notes = getNotes();
  const existing = notes.find((n) => n.id == params.id);
  const [date, setDate] = useState(new Date());

  const handleChange = (date) => {
    setDate(date);
  };

  const handleClick = () => {
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    const notes = getNotes();
    const existing = notes.find((n) => n.id == params.id);
    existing.locked = formattedDate;
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  return (
    <div className="flex flex-col justify-center">
      <Calendar className="self-center" onChange={handleChange} value={date} />;
      <LockButton onClick={handleClick} />
      <HomeButton />
    </div>
  );
}
