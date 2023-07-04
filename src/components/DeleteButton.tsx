import React from "react";
import image from "../assets/delete.png";

export default function DeleteButton({ id }) {
  const handleClick = () => {
    localStorage.removeItem(id);
  };

  return (
    <button onClick={handleClick}>
      <img src={image} />
    </button>
  );
}
