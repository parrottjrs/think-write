import React from "react";
import Navbar from "../components/Navbar";
import logo from "../images/logo.png";
import words from "../images/logo-just-words.png";

export default function Home() {
  return (
    <div>
      <Navbar writing={false} />
      <img
        src={logo}
        className="w-36 h-36 m-auto my-5 md:h-60 md:w-60 animate-fade
      "
      />
      <div className="p-4 w-4/5 self-center m-auto my-5 bg-slate-800/25 rounded-3xl">
        <h1 className="mb-2 md:mb-4 text-lg md:text-2xl text-slate-500">
          Welcome to Think-Write!
        </h1>
        <p className="text-xs md:text-lg text-slate-300 font-thin"></p>

        <p className="text-xs md:text-lg text-slate-300 font-thin">
          Think-Write was created and designed by Jordan Parrott, a student of
          Get Coding NL. It uses a combination of React and Tailwind CSS, as
          well as components like React-Quill. Building on his last project,{" "}
          <a
            className="text-cyan-300 hover:text-cyan-600 "
            href="https://github.com/parrottjrs/totes-mcnotes#hi-my-name-is-jordan-and-welcome-to-totes-mcnotes"
          >
            Totes-McNotes
          </a>
          , Jordan was able to create something a little more personal this time
          around. To learn more about him, and the "why" behind this project{" "}
          <a
            href="/think-write/about"
            className="text-cyan-300 hover:text-cyan-600 "
          >
            click here
          </a>
          .
        </p>

        <br />
        <p className="text-xs md:text-lg text-slate-300 font-thin">
          Think-Write is an app for people who want to be more mindful of their
          writing practice. Drawing from multiple philosophies, sage advice, and
          examples from some of Jordan's favourite authors, this app aims to
          give you the tools to help stay on task and form a healthy
          relationship with the craft.
        </p>
        <br />
        <div>
          <h2 className="mb-2 md:mb-4 md:text-2xl text-slate-500">How to</h2>
          <img src={words} />
        </div>
        <p className="text-xs md:text-lg text-slate-300 font-thin">
          Thinking-Write is easy. Think of something you want to write.
          Anything. That something is now your first project. Now take that
          project and run or continue reading to learn more.
        </p>
        <br />
      </div>
    </div>
  );
}
