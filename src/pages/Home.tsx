import React from "react";
import Navbar from "../components/Navbar";
import logo from "../images/logo.png";
import { STYLES } from "../utils/constants";

export default function Home() {
  return (
    <div className={STYLES.PARENT_DIV}>
      <Navbar />
      <section>
        <img src={logo} alt="Think-Write Logo" className={STYLES.ROUND_IMG} />
        <div className={STYLES.FLEX_GAP_DIV}>
          <div className={STYLES.SECTION_DIVIDER} />
          <h1 className={STYLES.H_ONE}>Welcome to Think-Write!</h1>
          <p className={STYLES.STANDARD_TEXT}>
            This app was created and designed by Jordan Parrott, a student of
            Get Coding NL. It uses a combination of React, Typescript, and
            Tailwind CSS, as well as components from React-Quill and Radix UI.
          </p>
          <p className={STYLES.STANDARD_TEXT}>
            Think-Write is an app for people who want to be more mindful of
            their writing practice. Drawing from personal experience,
            philosophy, and advice from some of Jordan's favourite authors, this
            app aims to give you the tools to help stay on task and form a
            healthy relationship with the craft. To learn more about him, and
            the "why" behind this project{" "}
            <a href="#/about" className={STYLES.IN_WRITING_ANCHOR}>
              click here.
            </a>
          </p>
          <div className="flex justify-center">
            <a
              href="#/projects"
              className="w-30 mt-4 text-sm md:text-lg py-1 px-2  md:py-2 md:px-4 self-right bg-blue-900  text-white font-thin tracking-wider border border-blue-600 rounded hover:bg-blue-600 hover:border-blue-300"
            >
              Start Writing
            </a>
          </div>

          <div className={STYLES.SECTION_DIVIDER} />
        </div>
      </section>
    </div>
  );
}
