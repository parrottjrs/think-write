import React from "react";
import Navbar from "../components/Navbar";
import logo from "../images/logo.png";
import { STYLES } from "../utils/constants";
import video from "../images/think-write.mp4";

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
            Building on his last project,{" "}
            <a
              className={STYLES.IN_WRITING_ANCHOR}
              href="https://github.com/parrottjrs/totes-mcnotes#hi-my-name-is-jordan-and-welcome-to-totes-mcnotes"
            >
              Totes-McNotes,
            </a>{" "}
            Jordan was able to create something a little more personal this time
            around.
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
          <div className={STYLES.SECTION_DIVIDER} />
          <h2 className={STYLES.H_TWO}>Using Think-Write</h2>
          <p className={STYLES.STANDARD_TEXT}>
            Below is an instructional video that shows the ins and outs of
            Think-Write. If you learn better by reading, head over to the{" "}
            <a className={STYLES.IN_WRITING_ANCHOR} href="#/how-to">
              how to
            </a>{" "}
            page.
          </p>
          <video controls>
            <source src={video} type="video/mp4"></source>
          </video>
          <p className={STYLES.STANDARD_TEXT}>
            So there you have it! Hopefully that video was helpful in kicking
            off your Think-Write journey. For any further info, feel free to
            contact Jordan through{" "}
            <a
              href="https://ca.linkedin.com/in/parrottjrs"
              className={STYLES.IN_WRITING_ANCHOR}
            >
              LinkedIn
            </a>
            ,{" "}
            <a
              href="https://github.com/parrottjrs"
              className={STYLES.IN_WRITING_ANCHOR}
            >
              Github
            </a>
            , by{" "}
            <a
              href="mailto:parrottjrs@gmail.com"
              className={STYLES.IN_WRITING_ANCHOR}
            >
              email
            </a>{" "}
            (links are also in the navbar). Also be sure to check out{" "}
            <a
              className={STYLES.IN_WRITING_ANCHOR}
              href="https://github.com/parrottjrs/think-write"
            >
              Think-Write's repo
            </a>
            .
          </p>
          <p className={STYLES.STANDARD_TEXT}>
            Best of luck with your writing!
          </p>
          <div className={STYLES.SECTION_DIVIDER} />
        </div>
      </section>
    </div>
  );
}
