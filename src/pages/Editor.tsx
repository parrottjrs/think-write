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
import { useForm } from "react-hook-form";

const SessionDialog = (props) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { currentTitle: props.title, goal: "wordCount" },
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
              props.passData(data);
              setOpen(false);
            })}
          >
            {!props.title && (
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
              <select
                id="goal"
                {...register("goal")}
                type="select"
                required={true}
              >
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
};

export default function Editor() {
  const params = useParams();
  const id = params.id;

  let { sessions, hot = "", title = "" } = createProject(id);

  const [text, setText] = useState(hot);
  const [data, setData] = useState({ currentTitle: title, goal: "" });

  useEffect(() => {
    saveProject({
      id: id,
      title: data.currentTitle,
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
        <h1>{data.currentTitle}</h1>
        <SessionDialog
          title={title}
          id={id}
          passData={(data) => {
            setData(data);
          }}
        />
        <SessionList id={id} sessions={sessions} hot={hot} title={title} />
        <ReactQuill theme="snow" value={text} onChange={handleChange} />
        <HomeButton />
        <SaveButton id={id} />
      </div>
    </div>
  );
}
