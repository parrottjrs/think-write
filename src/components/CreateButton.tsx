import React from "react";
import { v4 as uuid } from "uuid";

export default function CreateButton() {
  return (
    <a
      href={`/think-write/edit/${uuid()}`}
      className="self-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded m-10"
    >
      Create
    </a>
  );
}
