import React from "react";
import Navbar from "../components/Navbar";
import jordan from "../images/jordan.jpeg";
import words from "../images/logo-just-words.png";

export default function About() {
  return (
    <div>
      <Navbar />
      <section>
        <div className="flex flex-col gap-4 p-4 w-4/5 md:w-2/3 self-center m-auto my-5  rounded-3xl">
          <img
            src={jordan}
            alt="A photo of Jordan Parrott"
            className="w-36 md:w-60 m-auto mb-4 md:mb-8 animate-fade rounded-full"
          />
          <div className="w-full mb-3 h-px bg-gray-200  opacity-50" />
          <h1 className="text-xl md:text-3xl text-cyan-300 font-thin tracking-wider">
            About Think-Write
          </h1>
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            Hi! My name is Jordan Parrott. I'm a student at Get Coding NL, and
            an avid cat enthusiast. You might remember me from{" "}
            <a
              className="text-cyan-300 hover:text-cyan-600 "
              href="https://github.com/parrottjrs/totes-mcnotes#hi-my-name-is-jordan-and-welcome-to-totes-mcnotes"
            >
              Totes-McNotes, my interactive notes app.
            </a>{" "}
            Today I'd like to personally welcome to my latest creation:
          </p>
          <img src={words} className="-ml-3" />
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            The idea of Think-Write came into being in early 2023. It is the
            result of a long-lasting love/hate relationship with writing. I
            wanted to create a neurodivergent friendly writing app that would
            allow people like me to write without fear of falling into an
            endless trap of editing.
          </p>
          <h1 className="text-xl md:text-3xl text-cyan-300 font-thin tracking-wider">
            A Bit of History...
          </h1>
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            In 2018 I decided to tackle a lifelong goal of mine. To form a
            healthy writing habit. And so I started my journey into the
            fictional land of Cir. "The Dramori Chronicle" was to be a novel of
            epic proportins: a tale of whimsy that followed a blacksmith's son
            as he fled from dark forces that sought to capture him and harvest a
            dormant, ancient power that lay resting inside him. It's cliche I
            know, but it was fun to write!
          </p>
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            2 months passed as I formed what many might consider a good writing
            habit. I created characters, I created gods and a fictional history.
            I even drew a map! The resulting 92 manuscript pages are something
            that make me proud to this day. For those of you unfamiliar, that's
            approximately 23,000 words - Probably 22,000 more than anything else
            I've ever written.
          </p>
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            Here's the thing, though:{" "}
            <span className="italic">at page 92 I gave up</span>. Was I bored?
            Hell no! I was genuinely excited to have made it so far. The problem
            was poor confidence and lack of self-control.
          </p>
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            They say that in order to be a good writer, you have to do one thing
            and one thing only: write. Seems simple, but for me it wasn't so
            simple. I developed an editing problem. Every day I would sit down
            and think about what I did the day before and how I could fix it.
            There were always problems, and with those problems came a never
            ending fountain of self-doubt. Eventually I got frustrated and I
            quit. I let all the characters die on the page.
          </p>
          <h1 className="text-xl md:text-3xl text-cyan-300 font-thin tracking-wider">
            The Future of Writing
          </h1>
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            Think-Write is designed to be a self-doubt killer. By locking up
            writing "sessions", I hope to help budding writers to carry out
            their work unencumbered and press on despite all odds. That way they
            may truly enjoy the project they're working on and be free from
            self-doubt. This, to me, is the future of writing, and I invite you
            to come with me on this journey.
          </p>
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            Until next time,
          </p>
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            - Jordan
          </p>
        </div>
      </section>
    </div>
  );
}
