import React from "react";
import image from "../assets/edit.png";

export default function EditButton(id) {
  return (
    <button>
      <a href={`/think-write/edit/${id}`}>
        <img className="mx-5" src={image} />
      </a>
    </button>
  );
}
