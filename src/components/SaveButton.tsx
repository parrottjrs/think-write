import React from "react";

export default function SaveButton({ id }) {
  return (
    <a
      href={`/think-write/edit/${id}/save`}
      className="self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
    >
      Save
    </a>
  );
}
