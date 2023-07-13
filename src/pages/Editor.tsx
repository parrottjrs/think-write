import React from "react";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SaveButton from "../components/SaveButton";
import { useParams } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import {
  LOCAL_PROJECTS,
  createProject,
  formatDate,
  saveProject,
} from "../utils/utils";
import LockedSessions from "../components/LockedSessions";
import SessionEditor from "../components/SessionEditor";

export default function Editor() {
  const params = useParams();

  let { sessions, hot = "" } = createProject(params.id);

  const [text, setText] = useState(hot);

  useEffect(() => {
    saveProject({
      id: params.id,
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
        <LockedSessions sessions={sessions} />
        <SessionEditor projectId={params.id} sessions={sessions} />
        <ReactQuill theme="snow" value={text} onChange={handleChange} />
        <HomeButton />
        <SaveButton id={params.id} />
      </div>
    </div>
  );
}
