import React from "react";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SaveButton from "../components/SaveButton";
import { useParams } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import { createProject, formatDate, saveProject } from "../utils/utils";
import SessionList from "../components/SessionList";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";

const SessionDialog = () => {
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(true);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Project/Session Details
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Name your project and select a goal for your current writing
            session, or select "no goal". Click submit when you're finished.
          </Dialog.Description>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
              setOpen(false);
            })}
          >
            <label>
              <input
                type="text"
                {...register("currentTitle")}
                placeholder="Title"
                required={true}
              />
            </label>
            <select {...register("goal")} required={true}>
              <option value="wordCount">Set a word count</option>
              <option value="timer">Set a timer</option>
              <option value="noGoal">No goal</option>
            </select>
            <input type="submit" />
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default function Editor() {
  const params = useParams();
  const id = params.id;

  let { sessions, hot = "", title = "" } = createProject(id);

  const [text, setText] = useState(hot);

  useEffect(() => {
    saveProject({
      id: id,
      hot: text,
      modified: formatDate(new Date()),
      sessions: sessions,
    });
  }, [text]);

  const handleChange = (text) => {
    setText(text);
  };

  return (
    <div>
      <div className="w-75% flex flex-col">
        <SessionDialog />
        <SessionList id={id} sessions={sessions} hot={hot} />
        <ReactQuill theme="snow" value={text} onChange={handleChange} />
        <HomeButton />
        <SaveButton id={id} />
      </div>
    </div>
  );
}
