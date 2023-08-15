import React from "react";
import { useState, useEffect } from "react";
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

    if (progress < 100) {
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
          const wordCounter = (dirty: string) => {
            const clean = dirty.replace(/<\/?[^>]+(>|$)/g, "");
            return clean.split(/\S+/).length - 1;
            //reactQuill starts with <p><br></p> which for some reason won't parse, thus foo.length - 1
          };
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
    <div>
      <Navbar />
      <div className="w-full flex flex-col items-center">
        <h1 className="self-center text-lg md:text-3xl text-cyan-300 tracking-wider my-3 font-thin">
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
            className="text-slate-300 tracking-wider"
            placeholder="tell your story..."
            value={text}
            onChange={handleChange}
          />
        </div>
        <div className="w-4/5 h-px mb-4 bg-gray-200 my-1 mx-2 opacity-50" />
        <div className="w-4/5 flex justify-end contents-center">
          <Pomodoro />
          <LockCalendar />
          <SessionDialog
            title={title}
            onSubmit={(data) => {
              setData(data);
            }}
          />
        </div>

        {data.goalType !== "noGoal" && data.goalNumber !== 0 && (
          <ProgressBar progress={progress} />
        )}
      </div>
    </div>
  );
}
