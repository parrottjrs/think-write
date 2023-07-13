import React from "react";
import image from "../assets/delete.png";

export default function DeleteButton({ deleteProject, id }) {
  return (
    <button onClick={() => deleteProject(id)}>
      <img src={image} />
    </button>
  );
}
