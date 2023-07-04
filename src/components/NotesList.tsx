import React from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

export default function NotesList() {
  const keys = Object.keys(localStorage);

  return keys.map((key) => {
    const id = key;
    const { title, modified } = JSON.parse(localStorage.getItem(key) ?? "{}");
    return (
      <React.Fragment key={id}>
        <div className="p-4 border-b hover:bg-gray-50">
          {title ? title : ""}
        </div>
        <div className="p-4 border-b hover:bg-gray-50">{modified}</div>
        <div className="p-4 border-b hover:bg-gray-50">
          <EditButton id={id} />
          <DeleteButton id={id} />
        </div>
      </React.Fragment>
    );
  });
}
