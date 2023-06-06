import React from "react";

export default function SaveButton(text) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.setItem("notes", JSON.stringify(text));
  };

  return (
    <button
      className="self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-10"
      onClick={handleClick}
    >
      Save
    </button>
  );
}
