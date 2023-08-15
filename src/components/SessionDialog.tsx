import * as Dialog from "@radix-ui/react-dialog";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Pencil, Settings2 } from "lucide-react";

export default function SessionDialog({ title, onSubmit }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      currentTitle: title,
      goalType: "words",
      goalNumber: 0,
    },
  });

  const [open, setOpen] = useState(true);
  const [titleInput, showTitleInput] = useState(title ? false : true);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="">
        <Settings2 className="text-slate-300" strokeWidth={1} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="z-20 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-slate-800 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="m-0 text-[17px] text-slate-300 font-medium tracking-wider">
            Project/Session Details
          </Dialog.Title>
          <Dialog.Description className="mt-[10px] mb-5 text-[15px] text-white font-thin tracking-wider leading-normal">
            Name your project and select a goal for your current writing
            session, or select "no goal". Click submit when you're finished.
            Press ESC or click away to exit.
          </Dialog.Description>
          <form
            onSubmit={handleSubmit((data) => {
              onSubmit(data);
              setOpen(false);
            })}
          >
            <div className="flex flex-row">
              <label
                htmlFor="titleInput"
                className="text-slate-300 font-thin tracking-wider"
              >
                {"Project Title:"}
              </label>
              {!titleInput ? (
                <React.Fragment>
                  <p className="ml-2 text-slate-300 font-thin tracking-wider">
                    {title}
                  </p>
                  <button onClick={() => showTitleInput(true)}>
                    <Pencil
                      id="editTitle"
                      className="ml-2 p-0.5 text-slate-300 hover:text-yellow-400"
                      strokeWidth={1}
                    />
                  </button>
                </React.Fragment>
              ) : (
                <input
                  className="ml-2 mr-1 p-1 bg-zinc-900 text-white font-thin tracking-wider rounded-md"
                  id="titleInput"
                  type="text"
                  {...register("currentTitle")}
                  defaultValue={title}
                  required={false}
                />
              )}
            </div>

            <div className="mt-4 flex flex-row">
              <label
                htmlFor="goal"
                className="text-slate-300 font-thin tracking-wider"
              >
                {"Today's Goal: "}
              </label>
              <input
                className="w-12 ml-2 p-1 bg-zinc-900 text-white font-thin tracking-wider rounded-md"
                id="goal"
                type="number"
                {...register("goalNumber")}
              />
              <select
                id="goalType"
                {...register("goalType")}
                required={true}
                className="ml-2 px-1 py-1.5 bg-zinc-900 text-white font-thin tracking-wider rounded-md"
              >
                <option value="words">words</option>
                <option value="minutes">minutes</option>
                <option value="hours">hours</option>
                <option value="noGoal">No goal</option>
              </select>
            </div>
            <input
              type="submit"
              className="mt-4 self-right text-slate-300 font-thin tracking-wider hover:text-cyan-300"
            />
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
