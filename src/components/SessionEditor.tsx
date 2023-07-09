import React, { useState } from "react";
import ReactQuill from "react-quill";

export default function SessionEditor({ projectId, sessions, todaysDate }) {
  const project = JSON.parse(localStorage.getItem(projectId) ?? "{}");

  const parseDate = (date) => {
    // takes dd/mm/yyyy and turns it into an integer so it may be compared to another date
    const parsedDate = {
      day: parseInt(date[0] + date[1]),
      month: parseInt(date[3] + date[4]),
      year: parseInt(date[6] + date[7] + date[8] + date[9]),
    };
    return parsedDate;
  };

  const lockCheck = (currentDate, unlockDate) => {
    const date1 = parseDate(currentDate);
    const date2 = parseDate(unlockDate);
    if (
      date1.year > date2.year ||
      (date1.month > date2.month && date1.year === date2.year) ||
      (date1.day >= date2.day &&
        date1.month >= date2.month &&
        date1.year >= date2.year)
    ) {
      return true;
    } else {
      return false;
    }
  };
  const unlockSessions = () => {
    const openSessions = sessions.map((session) => {
      const action = lockCheck(todaysDate, session.lockedUntil);
      const { sessionId, text } = session;
      if (action === true) {
        return (session = {
          sessionId: sessionId,
          text: text,
          isLocked: false,
          lockedUntil: "00/00/0000",
        });
      } else {
        return (session = session);
      }
    });
    project.sessions = openSessions;
    localStorage.setItem(projectId, JSON.stringify(project));
  };

  if (sessions.length > 0) {
    unlockSessions();
    let textToRender = "";
    sessions.forEach((session) => {
      if (!session.isLocked) {
        textToRender += session.text;
      }
    });
    const [text, setText] = useState(textToRender);
    return <ReactQuill value={text} onChange={setText} />;
  }
}
