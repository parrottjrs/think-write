import React, { useState } from "react";
import { Lock } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  getLocalProjects,
  formatDate,
  saveProject,
  wordCounter,
} from "../utils/utils";
import Calendar from "react-calendar";
import { useParams } from "react-router-dom";
import { STYLES } from "../utils/constants";

export default function LockCalendar() {
  const params = useParams();

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

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
      wordCount: wordCounter(lockable.hot),
      lockDate: formatDate(new Date()),
      unlockDate: formatDate(date),
    });
    lockable.hot = "";
    saveProject(lockable);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="">
        <Lock className={STYLES.LOCK} strokeWidth={1} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className={STYLES.DIALOG_CONTENT}>
          <Dialog.Title className={STYLES.DIALOG_TITLE}>
            Ready to lock this session?
          </Dialog.Title>
          <Dialog.Description className={STYLES.STANDARD_TEXT}>
            Select a Lock date. We recommend 3 months from now. You may still
            refer to the text, but remember:{" "}
            <span className={STYLES.RED_TEXT}>
              you will not be able to edit until the lock date has passed.
            </span>{" "}
            So be sure you're ready to lock it.
          </Dialog.Description>
          <Calendar
            className="mx-auto my-2 md:my-5 bg-zinc-900 text-white font-thin"
            onChange={handleChange}
            value={date}
            calendarType="Hebrew"
          />
          <div className="flex justify-evenly">
            <a href="#/projects">
              <input
                type="submit"
                className={STYLES.AMBER_BUTTON}
                onClick={handleClick}
                value="Lock"
              />
            </a>
            <button
              id="cancel"
              className={STYLES.BLUE_BUTTON}
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
