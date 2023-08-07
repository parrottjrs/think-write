import React, { useEffect, useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";
import EditButton from "./EditButton";
import ReactQuill from "react-quill";
import { formatDate, lockCheck, saveProject } from "../utils/utils";

function SessionListItem({ session, id, hot, sessions, title }) {
  const { cold, sessionId, unlockDate } = session;

  const [change, setChange] = useState(true);
  const [sessionText, setSessionText] = useState(cold);

  useEffect(() => {
    const newSessions = [...sessions];
    const currentSession = newSessions.find(
      (session) => session.sessionId === sessionId
    );
    currentSession.cold = sessionText;
    saveProject({
      title: title,
      id: id,
      hot: hot,
      modified: formatDate(new Date()),
      sessions: newSessions,
    });
  }, [sessionText]);

  const handleChange = (sessionText) => {
    setSessionText(sessionText);
  };

  return (
    <div className="break-words p-2">
      <p>Session {sessionId}</p>
      <div>{!lockCheck(unlockDate) && <p>Locked until {unlockDate}</p>}</div>
      {change ? (
        <div dangerouslySetInnerHTML={{ __html: cold }} />
      ) : (
        <ReactQuill value={sessionText} onChange={handleChange} />
      )}
      <div>
        {lockCheck(unlockDate) && (
          <EditButton
            onClick={() => {
              setChange(!change);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default function SessionList({ id, sessions, hot, title }) {
  const [open, setOpen] = useState(false);

  if (!sessions.length) {
    return null;
  }
  return (
    <Collapsible.Root
      className="w-[80%] self-center mb-5"
      open={open}
      onOpenChange={setOpen}
    >
      <div className="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7 flex justify-between">
        <span className="text-violet11 text-[15px] leading-[25px]">
          Locked Sessions
        </span>

        <Collapsible.Trigger asChild>
          <button
            id={open ? "close" : "open"}
            className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center shadow-[0_2px_10px] shadow-blackA7 outline-none data-[state=closed]:bg-white data-[state=open]:bg-violet3 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
          >
            {open ? <Cross2Icon /> : <RowSpacingIcon />}
          </button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content className="select-none">
        {sessions.map((session) => (
          <SessionListItem
            key={session.sessionId}
            session={session}
            id={id}
            hot={hot}
            sessions={sessions}
            title={title}
          />
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
