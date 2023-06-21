import React, { useState } from "react";
import Calendar from "react-calendar";
import { useParams } from "react-router-dom";
import { getNotes } from "../utilities/utilities";
import LockButton from "../components/LockButton";
import HomeButton from "../components/HomeButton";

export default function Save() {
  const params = useParams();

  const lockable = JSON.parse(localStorage.getItem(params.id ?? "") ?? "{}");

  const [date, setDate] = useState(new Date());

  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  const handleChange = (date) => {
    setDate(date);
  };

  const handleClick = () => {
    if (lockable.hot === "") return;

    localStorage.setItem(
      `${params.id}`,
      JSON.stringify({
        cold: [lockable.hot],
        hot: "",
        modified: lockable.modified,
      })
    );
  };

  return (
    <div className="flex flex-col justify-center">
      <Calendar className="self-center" onChange={handleChange} value={date} />;
      <LockButton onClick={handleClick} />
      <HomeButton />
    </div>
  );
}
