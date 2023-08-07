import React from "react";

export default function LockButton({ onClick }) {
  return (
    <button
      aria-label="Lock session until a future date"
      className="self-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
      onClick={onClick}
    >
      Lock Note
    </button>
  );
}
