import React from "react";

export default function HomeButton() {
  return (
    <a
      href={`/think-write/`}
      className="self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-10"
    >
      Back to Home
    </a>
  );
}
