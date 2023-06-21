import React from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

export default function NoteElement() {
  const keys = Object.keys(localStorage);

  return keys.map((key) => {
    const id = key;
    const project = JSON.parse(localStorage.getItem(key) ?? "{}");
    return (
      <React.Fragment key={id}>
        <div className="p-4 border-b hover:bg-gray-50">
          {project.title ? project.title : ""}
        </div>
        <div className="p-4 border-b hover:bg-gray-50">{project.modified}</div>
        <div className="p-4 border-b hover:bg-gray-50">
          <EditButton id={id} />
          <DeleteButton />
        </div>
      </React.Fragment>
    );
  });
}
