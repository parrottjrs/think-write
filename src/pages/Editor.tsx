import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import { createProject, formatDate, saveProject } from "../utils/utils";
import SessionList from "../components/SessionList";
import SessionDialog from "../components/SessionDialog";
import Navbar from "../components/Navbar";
import * as Progress from "@radix-ui/react-progress";
import Pomodoro from "../components/Pomodoro";
import LockCalendar from "../components/LockCalendar";
import { STYLES } from "../utils/constants";
import * as Dialog from "@radix-ui/react-dialog";

const Congrats = ({ open, setOpen, setProgress, data, setData }) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className={STYLES.DIALOG_CONTENT}>
          <Dialog.Title className={STYLES.CONGRATS_DIALOG_TITLE}>
            Congratulations!
          </Dialog.Title>
          <Dialog.Description className={STYLES.STANDARD_TEXT}>
            Would you look at that? You've completed your goal. Nice work,
            friend! We suggest locking your session, but no worries if you're
            not ready.
          </Dialog.Description>
          <button
            id="cancel"
            className={STYLES.BLUE_BUTTON}
            onClick={() => {
              setData({ ...data, goalType: "noGoal" });
              setProgress(0);
              setOpen(false);
            }}
          >
            Ok
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const ProgressBar = ({ progress }) => {
  return (
    <Progress.Root
      className="relative overflow-hidden bg-slate-800 mt-5 rounded-full w-[300px] h-[25px] self-center border-2-black"
      style={{ transform: "translateZ(0)" }}
      value={progress}
    >
      <Progress.Indicator
        className="bg-lime-500 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35,1)]"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};

export default function Editor() {
  const params = useParams();
  const projectId = params.id;

  let { sessions, hot = "", title = "" } = createProject(projectId);
  const sessionId = sessions.length + 1;

  const [text, setText] = useState(hot);
  const [data, setData] = useState({
    currentTitle: title,
    goalType: "noGoal",
    goalNumber: 0,
  });
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  const wordCounter = (dirty: string) => {
    const clean = dirty.replace(/<\/?[^>]+(>|$)/g, "");
    return clean.split(/\S+/).length - 1;
    //reactQuill starts with <p><br></p> which for some reason won't parse, thus foo.length - 1
  };
  const wordCount = wordCounter(hot);

  useEffect(() => {
    saveProject({
      id: projectId,
      title: data.currentTitle,
      hot: text,
      modified: formatDate(new Date()),
      sessions: sessions,
    });

    let interval: number | undefined;
    let timing: number | undefined;

    if (progress === 100) {
      setOpen(true);
    } else {
      switch (data.goalType) {
        case "noGoal":
          break;
        case "minutes":
          timing = data.goalNumber * 600;
          interval = setInterval(() => setProgress(progress + 1), timing);
          break;
        case "hours":
          timing = data.goalNumber * 36000;
          interval = setInterval(() => setProgress(progress + 1), timing);
          break;
        case "words":
          const percentage = (wordCounter(hot) / data.goalNumber) * 100;
          setProgress(percentage);
          break;
        default:
          throw new Error("Invalid goalType: " + data.goalType);
      }
      return () => clearInterval(interval);
    }
  }, [text, data, progress]);

  const handleChange = (text) => {
    setText(text);
  };

  return (
    <div className="mb-10 md:mb-20">
      <Navbar />
      <div className="w-full flex flex-col items-center">
        <h1 className="self-center text-xl md:text-3xl text-cyan-300 font-thin tracking-wider my-3 ">
          {data.currentTitle}
        </h1>
        <SessionList
          id={projectId}
          sessions={sessions}
          hot={hot}
          title={title}
        />
        <div className="w-4/5 flex justify-start">
          <p className="text-slate-300 font-thin tracking-wider">
            Session {sessionId}, {formatDate(new Date())}
          </p>
        </div>
        <div className="w-4/5 h-px bg-gray-200 my-1 mx-2 opacity-50" />
        <div className="w-4/5 md:w-2/3">
          <ReactQuill
            theme="bubble"
            className={STYLES.QUILL_EDITOR}
            placeholder="tell your story..."
            value={text}
            onChange={handleChange}
          />
        </div>
        <div className="w-4/5 h-px mb-4 bg-gray-200 my-1 mx-2 opacity-50" />

        <div className="w-4/5 flex justify-between items-center">
          <div className={STYLES.STANDARD_TEXT}>
            {data.goalType === "words" ? (
              <p>
                {wordCount}/{data.goalNumber} words
              </p>
            ) : (
              <p>{wordCount} words</p>
            )}
          </div>
          <div className="flex ">
            <Pomodoro />
            <LockCalendar />
            <SessionDialog
              title={title}
              onSubmit={(data) => {
                setData(data);
              }}
            />
          </div>
        </div>
        {data.goalType !== "noGoal" && data.goalNumber !== 0 && (
          <ProgressBar progress={progress} />
        )}
        <Congrats
          open={open}
          setOpen={setOpen}
          setProgress={setProgress}
          data={data}
          setData={setData}
        />
      </div>
    </div>
  );
}
