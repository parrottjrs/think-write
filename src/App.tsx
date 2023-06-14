import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Editor from "./pages/Editor";
import Save from "./pages/Save";

export default function App() {
  const getNotes = () => {
    const maybeNotes = localStorage.getItem("notes");

    if (maybeNotes === null) {
      return [];
    } else {
      return JSON.parse(maybeNotes);
    }
  };

  const notes = getNotes();

  return (
    <Routes>
      <Route path="think-write/" element={<Homepage note={"yo"} />} />
      <Route path="think-write/edit" element={<Editor />} />
      <Route path="think-write/save" element={<Save />} />
    </Routes>
  );
}
