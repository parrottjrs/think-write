import React from "react";
import ProjectList from "../components/ProjectList";
import CreateButton from "../components/CreateButton";
import Navbar from "../components/Navbar";
import { STYLES } from "../utils/constants";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-4  place-content-evenly text-xs md:text-lg w-4/5 md:w-2/3  mb-5 md:mb-10">
          <div className={STYLES.PROJECTS_GRID_HEADER}>Title</div>
          <div className={STYLES.PROJECTS_GRID_HEADER}>Last Edit</div>
          <div className={STYLES.PROJECTS_GRID_HEADER}>Word Count</div>
          <div className={STYLES.PROJECTS_GRID_HEADER}>Actions</div>
          <ProjectList />
        </div>
        <CreateButton />
        <div className="w-4/5 md:w-2/3 mt-10">
          <h1 className={STYLES.WARNING_HEADER}>An Important Note:</h1>
          <p className={STYLES.STANDARD_TEXT}>
            In its current state, Think-Write saves all data in your browser.
            This will hopefully be changed in the coming months, but until then
            please remember: If you clear your browser's history{" "}
            <span className={STYLES.RED_TEXT}>all your data will be lost</span>.
            It is very important to maintain your browser's local storage or
            save your text elsewhere if you cannot do this. It's not ideal, but
            it's only for now, and we don't want your hard work to be lost!
          </p>
        </div>
      </div>
    </div>
  );
}
