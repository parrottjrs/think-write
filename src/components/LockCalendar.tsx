import React, { useState } from "react";
import { Lock } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { getLocalProjects, formatDate, saveProject } from "../utils/utils";
import Calendar from "react-calendar";
import { useParams } from "react-router-dom";

export default function LockCalendar() {
  const params = useParams();

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  console.log(date);

  const handleChange = (date) => {
    setDate(date);
  };

  const handleClick = () => {
    const localProjects = getLocalProjects();
    const lockable = localProjects.find((project) => project.id === params.id);

    const sessions = lockable.sessions;

    const sessionNumber = sessions.length + 1;
    if (lockable.hot === "") return;

    sessions.push({
      sessionId: sessionNumber,
      cold: lockable.hot,
      lockDate: formatDate(new Date()),
      unlockDate: formatDate(date),
    });
    lockable.hot = "";
    saveProject(lockable);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="">
        <Lock className="text-slate-300 mr-3" strokeWidth={1} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="z-20 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-slate-800 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="m-0 text-[17px] text-slate-300 font-medium tracking-wider">
            Ready to lock this session?
          </Dialog.Title>
          <Dialog.Description className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            Select a Lock date. We recommend 3 months from now. You may still
            refer to the text, but remember:{" "}
            <span className="text-red-300 font-normal">
              you will not be able to edit until the lock date has passed.
            </span>{" "}
            So be sure you're ready to lock it!
          </Dialog.Description>
          <div className="flex flex-col items-center">
            <Calendar
              className="mt-2 md:mt-4 bg-zinc-900 text-white font-thin"
              onChange={handleChange}
              value={date}
              calendarType="Hebrew"
            />
            <a href="#/projects">
              <input
                type="submit"
                className="mt-4 text-slate-300 font-thin tracking-wider hover:text-cyan-300"
                onClick={handleClick}
              />
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
