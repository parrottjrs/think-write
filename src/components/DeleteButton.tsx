import React from "react";
import image from "../assets/delete.png";

export default function DeleteButton({ onClick }) {
  return (
    <button onClick={onClick}>
      <img src={image} />
    </button>
  );
}
