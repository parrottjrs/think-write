import React from "react";
import error from "../images/error.png";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <section className="w-4/5 m-auto flex flex-col items-center">
        <img
          src={error}
          alt="404 error: not found"
          className="w-28 md: w-72 mt-4 mb-4 md:mb-10"
        />
        <p className="text-cyan-300 text-lg md:text-2xl font-thin tracking-wider">
          We're not sure what you're looking for, Chief, but this ain't it.
          Show's over. Go on. Get out of here!
        </p>
      </section>
    </div>
  );
}
