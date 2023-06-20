import React from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { getNotes } from "../utilities/utilities";

export default function NoteElement() {
  return getNotes().map((note) => {
    return note.locked ? (
      <React.Fragment key={note.id}>
        <div className="p-4 border-b hover:bg-gray-50">note</div>
        <div className="p-4 border-b hover:bg-gray-50">{note.modified}</div>
        <div className="p-4 border-b hover:bg-gray-50">{note.locked}</div>
        <div className="p-4 border-b hover:bg-gray-50">
          <DeleteButton />
        </div>
      </React.Fragment>
    ) : (
      <React.Fragment key={note.id}>
        <div className="p-4 border-b hover:bg-gray-50">note</div>
        <div className="p-4 border-b hover:bg-gray-50">{note.modified}</div>
        <div className="p-4 border-b hover:bg-gray-50">
          <EditButton id={note.id} />
          <DeleteButton />
        </div>
      </React.Fragment>
    );
  });
}
