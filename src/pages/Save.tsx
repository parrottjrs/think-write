import React, { useState } from "react";
import Calendar from "react-calendar";
import { useParams } from "react-router-dom";
import { getNotes } from "../utilities/utilities";
import LockButton from "../components/LockButton";

export default function Save() {
  const params = useParams();
  const notes = getNotes();
  const existing = notes.find((n) => n.id == params.id);

  const [date, setDate] = useState(new Date());

  const handleChange = (date) => {
    setDate(date);
  };

  return (
    <div className="flex flex-col justify-center">
      <Calendar className="self-center" onChange={handleChange} value={date} />;
      <LockButton />
    </div>
  );
}
