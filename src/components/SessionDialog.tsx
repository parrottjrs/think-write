import * as Dialog from "@radix-ui/react-dialog";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function SessionDialog({ title, passData }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      currentTitle: title,
      goalType: "words",
      goalNumber: 0,
    },
  });

  const [open, setOpen] = useState(true);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-slate-800 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="m-0 text-[17px] text-slate-300 font-medium">
            Project/Session Details
          </Dialog.Title>
          <Dialog.Description className="mt-[10px] mb-5 text-[15px] text-slate-300 font-thin leading-normal">
            Name your project and select a goal for your current writing
            session, or select "no goal". Click submit when you're finished.
          </Dialog.Description>
          <form
            onSubmit={handleSubmit((data) => {
              passData(data);
              setOpen(false);
            })}
          >
            <label htmlFor="titleInput" className="text-slate-300 font-thin">
              {"Project Title: "}
            </label>
            <input
              className="ml-2 my-1 p-1 bg-zinc-900 text-white font-light rounded-md"
              id="titleInput"
              type="text"
              {...register("currentTitle")}
              defaultValue={title}
              required={true}
            />

            <div>
              <label htmlFor="goal" className="text-slate-300 font-thin">
                {"Today's Goal: "}
              </label>
              <input
                className="w-12 m-2 p-1 bg-zinc-900 text-white font-light rounded-md"
                id="goal"
                type="number"
                {...register("goalNumber")}
              />
              <select
                id="goal"
                {...register("goalType")}
                required={true}
                className="m-1 px-1 py-1.5 bg-zinc-900 text-white font-light rounded-md"
              >
                <option value="words">words</option>
                <option value="minutes">minutes</option>
                <option value="hours">hours</option>
                <option value="noGoal">No goal</option>
              </select>
            </div>
            <input
              type="submit"
              className="mt-2 self-right text-slate-300 font-thin hover:text-cyan-300"
            />
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
