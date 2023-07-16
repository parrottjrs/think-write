import React, { useState } from "react";
import Calendar from "react-calendar";
import { useParams } from "react-router-dom";
import LockButton from "../components/LockButton";
import HomeButton from "../components/HomeButton";
import { LOCAL_PROJECTS, formatDate, saveProject } from "../utils/utils";

export default function Save() {
  const params = useParams();
  const lockable = LOCAL_PROJECTS.find((project) => project.id === params.id);

  const sessions = lockable.sessions;

  const sessionNumber = sessions.length + 1;

  const [date, setDate] = useState(new Date());

  const handleChange = (date) => {
    setDate(date);
  };

  const handleClick = () => {
    if (lockable.hot === "") return;

    sessions.push({
      sessionId: sessionNumber,
      cold: lockable.hot,
      unlockDate: formatDate(date),
    });
    lockable.hot = "";
    saveProject(lockable);
  };

  return (
    <div className="flex flex-col justify-center">
      <Calendar className="self-center" onChange={handleChange} value={date} />;
      <LockButton onClick={handleClick} />
      <HomeButton />
    </div>
  );
}
