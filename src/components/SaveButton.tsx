import React from "react";
import { Link } from "react-router-dom";

export default function SaveButton() {
  return (
    <a
      href="/think-write/save"
      className="self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-10"
    >
      Save
    </a>
  );
}
