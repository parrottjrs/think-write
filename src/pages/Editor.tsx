import React from "react";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SaveButton from "../components/SaveButton";
import { v4 as uuid } from "uuid";
import { NOTES } from "../utilities/utilities";

export default function Editor() {
  const date = new Date();

  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  const [note, setNote] = useState({
    id: uuid(),
    text: JSON.parse(localStorage.getItem("text")),
    modified: formattedDate,
  });

  const [text, setText] = useState(note.text);

  const saveNote = (updated) => {
    const existing = NOTES.find((note) => note.id == updated.id);

    if (existing) {
      existing.text = updated.text;
    } else {
      NOTES.push(updated);
    }
    localStorage.setItem("notes", JSON.stringify(NOTES));
  };

  useEffect(() => {
    localStorage.setItem("text", JSON.stringify(text));
    setNote({
      ...note,
      text: text,
    });
    saveNote(note);
  }, [text]);

  return (
    <div className="w-100 flex flex-col">
      <ReactQuill theme="snow" value={text} onChange={setText} />
      <SaveButton />
    </div>
  );
}
