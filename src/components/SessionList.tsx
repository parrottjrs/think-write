import React, { useEffect, useRef, useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import EditButton from "./EditButton";
import ReactQuill from "react-quill";
import { formatDate, lockCheck, saveProject } from "../utils/utils";
import { ArrowDownFromLine, XCircle } from "lucide-react";

const SessionListItem = ({ session, id, hot, sessions, title }) => {
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
    <section className="break-words mt-5 md:mt-8">
      <div className="flex items-center">
        <p className="text-cyan-300 font-thin text-sm md:text-lg mr-4">
          Session {sessionId}
        </p>
        {lockCheck(unlockDate) ? (
          <EditButton
            onClick={() => {
              setChange(!change);
            }}
          />
        ) : (
          <p className="text-slate-400 text-xs md:text-md font-thin">
            Locked until {unlockDate}
          </p>
        )}
      </div>
      <div className="my-1 border border-slate-600/25" />
      {change ? (
        <div
          className="my-1 text-slate-300 text-sm md:text-lg font-thin "
          dangerouslySetInnerHTML={{ __html: cold }}
        />
      ) : (
        <ReactQuill
          className="text-slate-300"
          value={sessionText}
          onChange={handleChange}
        />
      )}
      <div className="my-1 border border-slate-600" />
    </section>
  );
};

export default function SessionList({ id, sessions, hot, title }) {
  const [open, setOpen] = useState(false);
  const width = useRef(window.innerWidth);
  const size = width.current < 768 ? 16 : 24;
  if (!sessions.length) {
    return null;
  }
  return (
    <Collapsible.Root
      className="w-4/5 md:w-2/3 self-center mb-5"
      open={open}
      onOpenChange={setOpen}
    >
      <div className="border border-slate-400 rounded my-[10px] p-[10px] flex justify-between">
        <span className="text-xs md:text-lg text-slate-300 font-thin">
          Past Sessions
        </span>
        <Collapsible.Trigger asChild>
          <button id={open ? "close" : "open"}>
            {open ? (
              <XCircle
                className="text-slate-300 hover:text-slate-600"
                size={size}
              />
            ) : (
              <ArrowDownFromLine
                className="text-slate-300 hover:text-slate-600"
                size={size}
              />
            )}
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
