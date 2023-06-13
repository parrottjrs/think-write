import React from "react";
import image from "../assets/edit.png";

export default function EditButton() {
  return (
    <button>
      <img className="mx-5" src={image} />
    </button>
  );
}
