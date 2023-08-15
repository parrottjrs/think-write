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
        <div className="flex flex-col gap-3 mt-3 p-4 w-4/5 md:w-2/3 self-center justify-center m-auto rounded-3xl font-thin tracking-wider">
          <div className="w-full mb-3 h-px bg-gray-200  opacity-50" />
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            We're not sure what you're looking for, but it looks like you're a
            little lost. If you keep on this trail you could end up running into
            that evil forest spirit that eats wayward souls. It might be best to
            just{" "}
            <a
              className="text-s md:text-lg text-cyan-300 hover:text-cyan-600 "
              href="#/"
            >
              turn around and go home
            </a>
            .
          </p>
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            Wait a minute...are you looking for the carpenter's place? Well
            that's just down the path over here to the left. I hear they're{" "}
            <a
              className="text-s md:text-lg text-cyan-300 hover:text-cyan-600 "
              href="#/projects"
            >
              working on some great projects
            </a>
            .
          </p>
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            Oh that place over there? You definitely don't want to go there. I
            hear there's a super weird old guy who{" "}
            <a
              className="text-s md:text-lg text-cyan-300 hover:text-cyan-600 "
              href="#/"
            >
              won't stop talking about himself
            </a>
            .
          </p>
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            Best of luck on your travels, stranger.
          </p>
        </div>
      </section>
    </div>
  );
}
