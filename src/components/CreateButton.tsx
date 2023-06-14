import React from "react";
import { Link } from "react-router-dom";

export default function CreateButton() {
  return (
    <a
      href="/think-write/edit"
      className="self-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded m-10"
    >
      Create
    </a>
  );
}
