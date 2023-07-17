import React, { useEffect, useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";
import EditButton from "./EditButton";
import ReactQuill from "react-quill";
import { formatDate, lockCheck, saveProject } from "../utils/utils";

export default function SessionList({ id, sessions, hot }) {
  const [open, setOpen] = useState(false);

  if (!sessions.length) {
    return null;
  }
  return (
    <Collapsible.Root
      className="w-[80%] self-center"
      open={open}
      onOpenChange={setOpen}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Collapsible.Trigger asChild>
          <button className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center shadow-[0_2px_10px] shadow-blackA7 outline-none data-[state=closed]:bg-white data-[state=open]:bg-violet3 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black">
            {open ? <Cross2Icon /> : <RowSpacingIcon />}
          </button>
        </Collapsible.Trigger>
      </div>

      <div className="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7">
        <span className="text-violet11 text-[15px] leading-[25px]">
          Locked Sessions
        </span>
      </div>
      <Collapsible.Content className="select-none">
        {sessions.map(({ sessionId, unlockDate, cold }) => {
          const [change, setChange] = useState(true);

          const [sessionText, setSessionText] = useState(cold);

          useEffect(() => {
            saveProject({
              id: id,
              hot: hot,
              modified: formatDate(new Date()),
              sessions: sessions,
            });
          }, [sessionText]);

          const handleChange = (sessionText) => {
            setSessionText(sessionText);
          };

          return (
            <div className="break-words p-2" key={sessionId}>
              <p>Session {sessionId}</p>
              <div>
                {!lockCheck(unlockDate) && <p>Locked until {unlockDate}</p>}
              </div>
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
        })}
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
