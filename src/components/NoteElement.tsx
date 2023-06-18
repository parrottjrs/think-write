import React from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { NOTES } from "../utilities/utilities";

export default function NoteElement() {
  return NOTES.map((note) => {
    return (
      <>
        <div className="p-4 border-b hover:bg-gray-50">note</div>
        <div className="p-4 border-b hover:bg-gray-50">{note.modified}</div>
        <div className="p-4 border-b hover:bg-gray-50">
          <EditButton id={note.id} />
          <DeleteButton />
        </div>
      </>
    );
  });
}
