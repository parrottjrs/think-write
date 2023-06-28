import React from "react";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SaveButton from "../components/SaveButton";
import { useParams } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import { formatDate } from "../utils/utils";
import LockedSessions from "../components/LockedSessions";

export default function Editor() {
  const date = new Date();

  const params = useParams();
  const { sessions = [], hot = "" } = JSON.parse(
    localStorage.getItem(params.id ?? "") ?? "{}"
  );

  const [text, setText] = useState(hot);

  useEffect(() => {
    localStorage.setItem(
      `${params.id}`,
      JSON.stringify({
        hot: text,
        modified: formatDate(date),
        sessions: sessions,
      })
    );
  }, [text]);

  const handleChange = (text) => {
    setText(text);
  };

  return (
    <div>
      <div className="w-75% flex flex-col">
        <LockedSessions sessions={sessions} />
        <ReactQuill theme="snow" value={text} onChange={handleChange} />
        <HomeButton />
        <SaveButton id={params.id} />
      </div>
    </div>
  );
}
