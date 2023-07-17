import React from "react";
import { lockCheck } from "../utils/utils";

export default function EditButton({ onClick }) {
  return (
    <button
      className="self-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded m-5"
      onClick={onClick}
    >
      Edit
    </button>
  );
}
