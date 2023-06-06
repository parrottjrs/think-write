import React from "react";
import NotesList from "../components/NotesList";

export default function Homepage() {
  return (
    <>
      <h1 className="m-5 text-6xl text-center font-display">Think-Write!</h1>
      <NotesList />
    </>
  );
}
