import React from "react";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SaveButton from "../components/SaveButton";

export default function Editor() {
  const currentNote = JSON.parse(localStorage.getItem("note") ?? "");

  const [note, setNote] = useState(currentNote);

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  return (
    <div className="w-100 flex flex-col">
      <ReactQuill theme="snow" value={note} onChange={setNote} />
      <SaveButton />
    </div>
  );
}
