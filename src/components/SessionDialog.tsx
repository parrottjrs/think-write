import * as Dialog from "@radix-ui/react-dialog";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function SessionDialog({ title, passData }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      currentTitle: title,
      goalType: "wordCount",
      goalNumber: "500",
    },
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
            <label htmlFor="titleInput">
              {"Project Title:"}
              <input
                className="ml-2 pl-2"
                id="titleInput"
                type="text"
                {...register("currentTitle")}
                defaultValue={title}
                required={true}
              />
            </label>
            <div>
              <label htmlFor="goal">
                Today's Goal:
                <input
                  className="w-12 ml-2 pl-1"
                  id="goal"
                  type="number"
                  {...register("goalNumber")}
                />
                <select id="goal" {...register("goalType")} required={true}>
                  <option value="wordCount">words</option>
                  <option value="minutes">minutes</option>
                  <option value="hours">hours</option>
                  <option value="noGoal">No goal</option>
                </select>
              </label>
            </div>

            <input type="submit" className="self-right" />
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
