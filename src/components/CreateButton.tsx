import React from "react";
import { v4 as uuid } from "uuid";

export default function CreateButton() {
  return (
    <a
      href={`/think-write/edit/${uuid()}`}
      className="self-center bg-green-600 hover:bg-green-700 text-white font-bold text-sm md:text-lg py-1 md:py-2 px-2 md:px-4 border border-green-400 rounded  hover:bg-green-900"
    >
      New Project
    </a>
  );
}
