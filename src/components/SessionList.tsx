import React, { useEffect, useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import EditButton from "./EditButton";
import ReactQuill from "react-quill";
import {
  formatDate,
  lockCheck,
  saveProject,
  wordCounter,
} from "../utils/utils";
import { ArrowDownFromLine, XCircle } from "lucide-react";
import { STYLES } from "../utils/constants";

const SessionListItem = ({ session, id, hot, sessions, title }) => {
  const { cold, sessionId, unlockDate, lockDate, wordCount } = session;

  const [change, setChange] = useState(true);
  const [sessionText, setSessionText] = useState(cold);
  const [open, setOpen] = useState(false);

  const updatedWordCount = wordCounter(cold);

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
      wordCount,
      modified: formatDate(new Date()),
      sessions: newSessions,
    });
  }, [sessionText]);

  const handleChange = (sessionText) => {
    setSessionText(sessionText);
  };

  return (
    <Collapsible.Root
      className="w-full md:w-2/3 self-center mb-5"
      open={open}
      onOpenChange={setOpen}
    >
      <div className="flex justify-left">
        <p className="text-cyan-300 font-thin tracking-wider text-md md:text-xl mr-4">
          Session {sessionId}
        </p>
        <Collapsible.Trigger asChild>
          <button id={open ? "close" : "open"}>
            {open ? (
              <XCircle className={STYLES.X} strokeWidth={1} />
            ) : (
              <ArrowDownFromLine
                className={STYLES.ARROW_DOWN}
                strokeWidth={1}
              />
            )}
          </button>
        </Collapsible.Trigger>
        {lockCheck(unlockDate)
          ? null
          : !open && (
              <p className="ml-4 text-slate-300/75 text-xs md:text-md font-thin tracking-wider">
                Locked until <br /> {unlockDate}
              </p>
            )}
      </div>
      <Collapsible.Content className="select-none">
        <section className="break-words mt-5 md:mt-8">
          <div className="flex items-center justify-between">
            {lockCheck(unlockDate) ? (
              <EditButton
                onClick={() => {
                  setChange(!change);
                }}
              />
            ) : (
              <p className="text-slate-300 text-xs md:text-md font-thin tracking-wider">
                Locked on {lockDate}
              </p>
            )}
            <p className="text-slate-300 text-xs md:text-md font-thin tracking-wider">
              {updatedWordCount} {updatedWordCount > 1 ? "words" : "word"}
            </p>
          </div>
          <div className="my-2 border border-slate-600/25" />
          {change ? (
            <div
              className="my-1 text-slate-300 text-sm md:text-lg font-thin tracking-wider"
              dangerouslySetInnerHTML={{ __html: cold }}
            />
          ) : (
            <ReactQuill
              theme="bubble"
              className={STYLES.QUILL_EDITOR}
              value={sessionText}
              onChange={handleChange}
            />
          )}
        </section>
        <div className="my-2 border border-slate-600/25" />
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default function SessionList({ id, sessions, hot, title }) {
  const [open, setOpen] = useState(false);

  if (!sessions.length) {
    return null;
  }
  return (
    <Collapsible.Root
      className="w-4/5 md:w-2/3 self-center mb-5"
      open={open}
      onOpenChange={setOpen}
    >
      <div className=" my-[10px] p-[10px] pl-0 flex justify-start">
        <p className="mr-2 text-sm md:text-lg text-slate-300 font-thin tracking-wider">
          Past Sessions
        </p>
        <Collapsible.Trigger asChild>
          <button id={open ? "close" : "open"}>
            {open ? (
              <XCircle className={STYLES.X} strokeWidth={1} />
            ) : (
              <ArrowDownFromLine
                className={STYLES.ARROW_DOWN}
                strokeWidth={1}
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
