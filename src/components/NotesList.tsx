import React from "react";

export default function NotesList() {
  return (
    <div className="mt-15">
      <div className="px-4 sm:px-8 max-w-3xl m-auto">
        <h2 className="text-center font-semibold text-3xl mb-10">Notes</h2>
        <ul className="border border-gray-200 rounded overflow-hidden shadow-md">
          <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
            First Item
          </li>
          <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
            Second Item
          </li>
          <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
            Third Item
          </li>
          <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
            Another Item
          </li>
          <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
            Item for the Nth time
          </li>
        </ul>
      </div>
    </div>
  );
}
