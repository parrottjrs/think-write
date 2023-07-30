import * as Dialog from "@radix-ui/react-dialog";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function SessionDialog({ title, passData }) {
  const { register, handleSubmit } = useForm({
    defaultValues: { currentTitle: title, goal: "wordCount" },
  });

  const [open, setOpen] = useState(true);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content
          className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Project/Session Details
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Name your project and select a goal for your current writing
            session, or select "no goal". Click submit when you're finished.
          </Dialog.Description>
          <form
            onSubmit={handleSubmit((data) => {
              passData(data);
              setOpen(false);
            })}
          >
            {!title && (
              <label htmlFor="titleInput">
                {"Project Title"}
                <input
                  id="titleInput"
                  type="text"
                  {...register("currentTitle")}
                  placeholder="Your title goes here"
                  required={true}
                />
              </label>
            )}

            <label htmlFor="goal">
              Today's Goal
              <select id="goal" {...register("goal")} required={true}>
                <option value="wordCount">Set a word count</option>
                <option value="timer">Set a timer</option>
                <option value="noGoal">No goal</option>
              </select>
            </label>

            <input type="submit" className="self-right" />
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
