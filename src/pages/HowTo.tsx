import React from "react";
import Navbar from "../components/Navbar";
import { STYLES } from "../utils/constants";
import words from "../images/logo-just-words.png";

export default function HowTo() {
  return (
    <div className={STYLES.PARENT_DIV}>
      <Navbar />
      <section>
        <div className={STYLES.FLEX_GAP_DIV}>
          <h1 className={STYLES.H_ONE}>How to</h1>
          <img
            src={words}
            alt="Think-Write"
            className="-ml-1.5 md:-ml-3 w-40 md:w-80"
          />
          <p className={STYLES.STANDARD_TEXT}>
            Thinking-Write is easy. Think of something you want to write.
            Anything. That something is now your first project. Now take that
            project and run or continue reading to learn more.
          </p>
          <h2 className={STYLES.H_TWO}>Starting a Project</h2>
          <p className={STYLES.STANDARD_TEXT}>
            The first step is to head over to the "projects section" and click
            the big green button labeled "New Project". Congratulations! You've
            started your first session! Once you're in, give your project a
            title, then pick a goal for your session. This goal could be a
            number of words, minutes, or hours. You may also select "no goal".
            It's up to you. If you've set up a goal for yourself, it will be
            tracked in a progress bar beneath the text editor.
          </p>
          <p className={STYLES.STANDARD_TEXT}>
            Ok so we've got a title and a goal set. Awesome! Before you start
            writing, have a peek at the icons beneath the lower right hand
            corner of the editor. This where your toolbox lives. In its current
            state, the toolbox features a pomodoro timer, a lock button, and a
            project settings button. The projects settings button just opens
            your title/goal dialog so you can make changes if needed.
          </p>
          <h3 className={STYLES.WARNING_HEADER}>Note:</h3>
          <p className={STYLES.STANDARD_TEXT}>
            Think-Write comes with one big caveat: in its current state, all
            data will live in your browser. Feel free to use it, but if you
            clear you browser{" "}
            <span className="text-red-300">your data will be lost</span>. Please
            bare this in mind. It is very important to maintain your browser's
            local storage or save your text elsewhere if you cannot do this.
          </p>
          <h3 className={STYLES.H_THREE}>The Pomodoro Timer</h3>
          <p className={STYLES.STANDARD_TEXT}>
            If you haven't heard of the pomodoro method, that's ok. Basically
            it's a rotiational timer that gives you a clock to work against. It
            was featured here because Jordan, the app's creator, is a big ADHD
            brain and this is something that helps him focus. It's a proven
            method and it works!
          </p>
          <p className={STYLES.STANDARD_TEXT}>
            Clicking the pomodoro button will display two settings: 20/5 and
            40/10. These numbers refer to set "work periods" and "break
            periods". The longer number (eg. 20, 40) is the length of time in
            minutes that you will work. When the time is up, the pomodoro will
            beep at you, signifying that it is break time. Break time lasts for
            the shorter number of minutes (eg. 5/10), and will beep again to
            signify the start of another work period. This lasts for 4 rotations
            at which point you may start the cycle over or finish your session!
            It should also be noted that once the timer is set, clicking the
            clock a second time or leaving the page will cancel the function.
          </p>
          <h3 className={STYLES.H_THREE}>The Lock Button</h3>
          <p className={STYLES.STANDARD_TEXT}>
            Before you click this little guy, it's best you go back to finishing
            up your session first.
          </p>
          <p className="text-s md:text-lg text-cyan-600 font-semibold tracking-wider">
            CUE ELEVATOR MUSIC
          </p>
          <p className={STYLES.STANDARD_TEXT}>
            You done? Great! One more nice little feature before we move on: if
            you leave the editor-- if you click away, close the browser,
            whatever, your text will remain in the editor for when you return!
          </p>
          <h3 className={STYLES.H_THREE}>The Lock Button</h3>
          <p className={STYLES.STANDARD_TEXT}>
            When you're ready to commit to locking away your fresh and almost
            certainly-- no matter what your sweet, innocent brain is telling
            you-- fantastic piece of writing, click this bad-boy. A dialog will
            pop up. Select a future date. This will determine how long your
            session will be locked up. A minimum of 12 weeks is recommended, but
            you can pick any date. Or if you just want to clear your editor you
            can click on today's date to save the session in an unlocked state.
            Whatever choice you make, heed the warning: Once your session is
            locked{" "}
            <span className={STYLES.RED_TEXT}>
              it cannot be accessed until the lock date has passed
            </span>
            . It's ok though. Have you ever forgotten, for months or years,
            about a piece of writing and returned to it with a set of fresh
            eyes? It's absolute bliss! Go ahead. Trust in the process. Close
            your eyes and click "submit!"
          </p>
          <h3 className={STYLES.H_THREE}>Past Sessions</h3>
          <p className={STYLES.STANDARD_TEXT}>
            Now that we're back out on the projects page, you will see your
            project on display. Isn't it beautiful? Brings a tear to the old
            eye. On the right, you'll see the typical edit and delete buttons.
            Take a guess what they do. While you're doing that, I'm gonna go
            grab some water.
          </p>
          <p className={STYLES.STANDARD_TEXT}>
            Seriously I just had a drink of nice, cold water. You probably
            should too now that we're on topic. OH MY GOD, I SHOULD PUT A
            HYDRATION REMINDER IN HERE.
          </p>
          <p className={STYLES.STANDARD_TEXT}>
            Anyway, click on the edit button and check out the new state of your
            project. Up top there's a dropdown that holds all your past
            sessions. Each one is housed in its own dropdown and can be read, or
            edited, individually. Keep an eye out for those unlock dates if
            you're taking advantage of that feature!
          </p>
          <h2 className={STYLES.H_TWO}>The End?</h2>
          <p className={STYLES.STANDARD_TEXT}>
            Alright so that just about does it for the tutorial! Hopefully it
            helped answer all your burning questions. If you have any comments
            or questions to ask, links to Jordan's socials are up top in the
            navbar. Feel free to reach out to him or set up an issue in{" "}
            <a
              className={STYLES.IN_WRITING_ANCHOR}
              href="https://github.com/parrottjrs/think-write"
            >
              Think-Write's repo
            </a>
            .
          </p>
          <div className={STYLES.SECTION_DIVIDER} />
        </div>
      </section>
    </div>
  );
}
