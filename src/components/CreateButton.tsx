import React from "react";
import { v4 as uuid } from "uuid";

export default function CreateButton() {
  return (
    <a
      href={`/think-write/edit/${uuid()}`}
      aria-label="Start a new project"
      className="self-center bg-green-900 hover:bg-green-600 text-white font-thin tracking-wider text-sm md:text-lg py-1 px-2  md:py-2 md:px-4 border border-green-600 rounded"
    >
      New Project
    </a>
  );
}
