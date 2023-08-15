import React from "react";
import Navbar from "../components/Navbar";
import jordan from "../images/jordan.jpeg";
import words from "../images/logo-just-words.png";

export default function About() {
  return (
    <div className="mb-10">
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
            About The Creator
          </h1>
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            Hi! My name is Jordan Parrott. I'm currently working for Bell Aliant
            in my hometown while I work on my goal of becoming a software
            developer. I graduated from Memorial of university over 10 years ago
            with a BA in Linguistics. After graduating university, I was left
            without a sense of direction or purpose. I bounced around a bit
            before landing on seasonal construction job where I worked for 7
            years. In that time I helped create roads for dozens of sub
            divisions and main thoroughfares stretching from Grande Cache,
            Alberta to Yellowknife in the Northwest Territories.
          </p>
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            Being in construction for so long was a great experience for many
            reasons. The most important thing I discovered is just how badly I
            needed to start working on some personal creative work. Today I'm
            doing that very thing--living in Newfoundland and learning through
            Get Coding NL. You might remember me talking about{" "}
            <a
              className="text-cyan-300 hover:text-cyan-600 "
              href="https://github.com/parrottjrs/totes-mcnotes#hi-my-name-is-jordan-and-welcome-to-totes-mcnotes"
            >
              Totes-McNotes, my interactive notes app.
            </a>{" "}
            That was my first project. Today I'd like to personally welcome to
            my latest creation:
          </p>
          <div className="w-full mt-3 h-px bg-gray-200  opacity-50" />
          <img src={words} className="-ml-3" />
          <div className="w-full mb-3 h-px bg-gray-200  opacity-50" />
          <h1 className="text-xl md:text-3xl text-cyan-300 font-thin tracking-wider">
            A Story About Stories...
          </h1>
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            Years ago I decided to tackle a lifelong goal of mine: to form a
            healthy writing habit. My originial idea started budding in 2013,
            but a lot of factors held me back. Mostly my own poor mental health.
            But in 2018 I finally started my journey into the fictional land of
            Cir. "The Dramori Chronicle" was to be a novel of epic proportions:
            a tale of whimsy that followed a blacksmith's son as he fled from
            dark forces that sought to capture him and harvest a dormant,
            ancient power within him. It's cliche I know. Judge all you want,
            but it was loads of fun to write.
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
            Every single day since then, I have thought about how I gave up and
            what I could have done differently. I've read books on writing,
            listened to podcasts, I've worn my keyboards weary seeking advice
            and comfort. What I found instead was a harsh truth: I couldn't do
            the thing without being willing to dive in. To relish the highs but
            take whatever horrible feelings came along with it. More to the
            point, the only thing holding me back was myself.
          </p>
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            Think-Write is designed to be a self-doubt killer. I want to give
            people all the tools I always needed and never had. The most
            important tool, and by far the most innovative, is the lock
            function. By locking up writing "sessions", I hope to help writers
            carry out their work unencumbered and press on despite all odds. I
            hope that they may truly enjoy the project they're working on and be
            free from self-doubt, or at least free from being able to respond to
            it in a counterproductive manner like I did.
          </p>
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            This, to me, is the future of writing, and I invite you to join me
            on this journey. I invite you to Think-Write.
          </p>
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            Until next time, <br /> - Jordan
          </p>
          <div className="w-full mb-3 h-px bg-gray-200  opacity-50" />
        </div>
      </section>
    </div>
  );
}
