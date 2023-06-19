import React from "react";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SaveButton from "../components/SaveButton";
import { getNotes } from "../utilities/utilities";
import { useParams } from "react-router-dom";

export default function Editor() {
  const date = new Date();

  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  const params = useParams();

  const notes = getNotes();
  const existing = notes.find((n) => n.id == params.id);

  const [note, setNote] = useState(
    existing ?? {
      id: params.id,
      text: "",
      modified: formattedDate,
    }
  );

  useEffect(() => {
    const notes = getNotes();
    const existing = notes.find((n) => n.id == params.id);
    if (existing) {
      existing.text = note.text;
    } else {
      notes.push(note);
    }
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [note]);

  const handleChange = (text) => {
    setNote({
      ...note,
      text,
    });
  };

  return (
    <div className="w-100 flex flex-col">
      <ReactQuill theme="snow" value={note.text} onChange={handleChange} />
      <SaveButton />
    </div>
  );
}
