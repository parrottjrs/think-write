import React from "react";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SaveButton from "../components/SaveButton";
import { v4 as uuid } from "uuid";

export default function Editor() {
  const getText = () => {
    const maybeText = localStorage.getItem("text");

    if (maybeText === null) {
      return;
    } else {
      return JSON.parse(maybeText);
    }
  };

  const currentNote = {
    text: getText(),
    id: uuid(),
  };

  const [text, setText] = useState(currentNote.text);

  useEffect(() => {
    localStorage.setItem("text", JSON.stringify(text));
  }, [text]);

  return (
    <div className="w-100 flex flex-col">
      <ReactQuill theme="snow" value={text} onChange={setText} />
      <SaveButton note={currentNote} />
    </div>
  );
}
