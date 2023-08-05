import React from "react";
import Navbar from "../components/Navbar";
import jordan from "../images/jordan.jpeg";
import words from "../images/logo-just-words.png";
export default function About() {
  return (
    <div>
      <Navbar writing={false} />
      <img
        src={jordan}
        className="w-36 h-36 m-auto my-5 md:h-60 md:w-60 animate-fade rounded-full
        "
      />
      <div className="p-4 w-2/3 self-center m-auto bg-slate-800/40 rounded-3xl">
        <p className="text-xs md:text-lg text-slate-300 font-thin">
          Hi! My name is Jordan Parrot. You might remember me from such apps as{" "}
          <a
            className="text-cyan-300 hover:text-cyan-600 "
            href="https://github.com/parrottjrs/totes-mcnotes#hi-my-name-is-jordan-and-welcome-to-totes-mcnotes"
          >
            Totes-McNotes: An Interactive Notes App
          </a>{" "}
          , and Swim Yourself Thin: Your Virtual Aquatic Weight Loss Guide (just
          kidding, that one's not real. I can't even swim. Although the name is
          pretty catchy...) Welcome to my laste creation!
        </p>

        <img
          src={words}
          className=" m-auto my-5 
        "
        />
        <p className="text-xs md:text-lg text-slate-300 font-thin">
          I'm not much for talking about myself, but my betters told me that I
          should because telling a story is a great to get people involved in my
          project. And so a story I will tell. A story about fear. A story about
          triumph. A story about regret.
        </p>
        <br />
        <p className="text-xs md:text-lg text-slate-300 font-thin">
          A story <span className="italic">about stories.</span>
        </p>
        <br />
        <p className="text-xs md:text-lg text-slate-300 font-thin">
          In 2018 I decided to tackle a lifelong goal of mine. To form a healthy
          writing habit. And so I started my journey into the fictional land of
          Cir. "The Dramori Chronicle" was to be a novel of epic proportins: a
          tale of whimsy that followed a blacksmith's son as he fled from dark
          forces that sought to capture him and harvest a dormant, ancient power
          that lay resting inside him.
        </p>
        <br />
        <p className="text-xs md:text-lg text-slate-300 font-thin">
          2 months passed as I formed what many might consider a good writing
          habit. I created characters, I created gods and a fictional history. I
          even drew a map! The resulting 92 manuscript pages are something that
          make me proud to this day. For those of you unfamiliar, that's
          approximately 23,000 words - Probably 22,000 more than anything else
          I've ever written.
        </p>
        <br />
        <p className="text-xs md:text-lg text-slate-300 font-thin">
          Here's the thing, though:{" "}
          <span className="italic">at page 92 I gave up</span> . Was I bored?
          Hell no! I was genuinely excited to have made it so far. The issue was
          rooted in my then undiagnosed ADHD. The problem was poor confidence
          and lack of self-control.
        </p>
        <br />
        <p className="text-xs md:text-lg text-slate-300 font-thin">
          They say that in order to be a good writer, you have to do one thing
          and one thing only: write. Seems simple, but for me it wasn't so
          simple. I developed an editing problem. Every day I would sit down and
          think about what I did the day before and how I could fix it. There
          were always problems, and with those problems came a never ending
          fountain of self-doubt. Eventually I got frustrated and I quit. I let
          all the characters die on the page.
        </p>
      </div>
    </div>
  );
}
