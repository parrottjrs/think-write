import React from "react";
import { v4 as uuid } from "uuid";

export default function CreateButton() {
  return (
    <a
      href={`/think-write/edit/${uuid()}`}
      className="self-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-400 rounded m-5 hover:bg-green-900"
    >
      Create
    </a>
  );
}
