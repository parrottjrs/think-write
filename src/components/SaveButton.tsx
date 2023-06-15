import React from "react";
import { Link } from "react-router-dom";

export default function SaveButton(note) {
  const getNotes = () => {
    const maybeNotes = localStorage.getItem("notes");

    return maybeNotes ? JSON.parse(maybeNotes) : [];
  };

  let notes = getNotes();

  const saveNote = (note) => {
    const noteToSave = note;

    notes.unshift(noteToSave);
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.removeItem("text");
  };
  return (
    <a
      href="/think-write/save"
      onClick={() => saveNote(note)}
      className="self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-10"
    >
      Save
    </a>
  );
}
