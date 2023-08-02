import React from "react";
import Navbar from "../components/Navbar";
import logo from "../images/logo.png";

export default function Home() {
  return (
    <div className="text-center">
      <Navbar writing={false} />
      <img
        src={logo}
        className="w-36 h-36 m-auto  my-5 md:h-80 md:w-80 animate-fade
      "
      />
      ;
    </div>
  );
}
