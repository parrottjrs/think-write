import React from "react";
import image from "../assets/edit.png";

export default function EditButton({ id }) {
  return (
    <a href={`/think-write/edit/${id}`} className="inline-block">
      <img className="mx-5" src={image} />
    </a>
  );
}
