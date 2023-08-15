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
          <Dialog.Title className="m-0 text-[17px] text-slate-300 font-medium">
            Ready to Lock Your Current Session?
          </Dialog.Title>
          <Dialog.Description className="mt-[10px] mb-5 text-[15px] text-white font-thin tracking-wider leading-normal">
            Select a Lock date. Our recommendation is 3 months from now. You
            will still be able to use the text for reference if need be, but you
            will not be able to edit it until the lock date has passed.
          </Dialog.Description>
          <div className="flex flex-col items-center">
            <Calendar
              className="bg-slate-800 font-thin tracking-wider"
              onChange={handleChange}
              value={date}
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
