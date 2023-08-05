import React from "react";
import Navbar from "../components/Navbar";
import logo from "../images/logo.png";

export default function Home() {
  return (
    <div>
      <Navbar writing={false} />
      <img
        src={logo}
        className="w-36 h-36 m-auto my-5 md:h-60 md:w-60 animate-fade
      "
      />
      <div className="p-4 w-2/3 self-center m-auto bg-slate-800/40 rounded-3xl">
        <p className="text-xs md:text-lg text-slate-300 font-thin"></p>
      </div>
    </div>
  );
}
