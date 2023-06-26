import React from "react";
import parse from "html-react-parser";

export default function LockedSessions({ sessions }) {
  return sessions.map((session) => {
    const { sessionId, text } = session;
    return (
      <div key={sessionId}>
        <h2>Session {sessions.indexOf(session) + 1}</h2>
        {parse(text)}
      </div>
    );
  });
}
