import * as Dialog from "@radix-ui/react-dialog";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Pencil, Settings2 } from "lucide-react";
import { STYLES } from "../utils/constants";

export default function SessionDialog({ title, onSubmit }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      currentTitle: title,
      goalType: "noGoal",
      goalNumber: 0,
    },
  });

  const [open, setOpen] = useState(true);
  const [titleInput, showTitleInput] = useState(title ? false : true);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="">
        <Settings2 className={STYLES.SETTINGS} strokeWidth={1} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className={STYLES.DIALOG_CONTENT}>
          <Dialog.Title className="m-0 text-[17px] text-slate-300 font-medium tracking-wider">
            Project/Session Details
          </Dialog.Title>
          <Dialog.Description className="mt-4 mb-5 text-s md:text-lg text-slate-300 font-thin tracking-wider">
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
            <div className="flex flex-row items-center">
              <label htmlFor="titleInput" className={STYLES.STANDARD_TEXT}>
                {"Project Title:"}
              </label>
              {!titleInput ? (
                <React.Fragment>
                  <p className="mx-2 text-sm md:text-lg text-slate-300 font-thin tracking-wider">
                    {title}
                  </p>
                  <button onClick={() => showTitleInput(true)}>
                    <Pencil
                      id="editTitle"
                      className={STYLES.PENCIL}
                      strokeWidth={1}
                    />
                  </button>
                </React.Fragment>
              ) : (
                <input
                  className="w-44 ml-2 p-1 bg-zinc-900 text-sm md: text-lg text-white font-thin tracking-wider rounded-md focus: bg-zinc-900"
                  id="titleInput"
                  type="text"
                  {...register("currentTitle")}
                  defaultValue={title}
                  required={false}
                  autoComplete="off"
                />
              )}
            </div>

            <div className="mt-4 flex flex-row items-center">
              <label htmlFor="goal" className={STYLES.STANDARD_TEXT}>
                {"Today's Goal: "}
              </label>
              <input
                className="w-16 ml-2 p-1.5 bg-zinc-900 text-sm md:text-lg text-white font-thin tracking-wider rounded-md"
                id="goal"
                type="number"
                {...register("goalNumber")}
              />
              <select
                id="goalType"
                {...register("goalType")}
                required={true}
                className="ml-2 px-1 py-1.5 bg-zinc-900 text-sm md:text-lg text-white font-thin tracking-wider rounded-md"
              >
                <option value="words">words</option>
                <option value="minutes">minutes</option>
                <option value="hours">hours</option>
                <option value="noGoal">No goal</option>
              </select>
            </div>
            <input type="submit" className={STYLES.BLUE_BUTTON} />
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
