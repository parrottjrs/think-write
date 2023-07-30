import React from "react";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SaveButton from "../components/SaveButton";
import { useParams } from "react-router-dom";
import { createProject, formatDate, saveProject } from "../utils/utils";
import SessionList from "../components/SessionList";
import SessionDialog from "../components/SessionDialog";
import Navbar from "../components/Navbar";
import ProjectsNavButton from "../components/ProjectsNavButton";
import * as Progress from "@radix-ui/react-progress";

const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root
      className="relative overflow-hidden bg-red-500 mt-5 rounded-full w-[300px] h-[25px] self-center border-2-black"
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: "translateZ(0)",
      }}
      value={progress}
    >
      <Progress.Indicator
        className="bg-lime-500 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
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
        <Navbar />
        <h1 className="self-center text-3xl my-5 font-semibold whitespace-nowrap">
          {data.currentTitle}
        </h1>
        <SessionDialog
          title={title}
          passData={(data) => {
            setData(data);
          }}
        />
        <SessionList id={id} sessions={sessions} hot={hot} title={title} />
        <ReactQuill theme="snow" value={text} onChange={handleChange} />
        <ProgressDemo />
        <ProjectsNavButton />
        <SaveButton id={id} />
      </div>
    </div>
  );
}
