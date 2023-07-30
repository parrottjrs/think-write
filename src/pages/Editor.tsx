import React from "react";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SaveButton from "../components/SaveButton";
import { useParams } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import { createProject, formatDate, saveProject } from "../utils/utils";
import SessionList from "../components/SessionList";
import SessionDialog from "../components/SessionDialog";

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
