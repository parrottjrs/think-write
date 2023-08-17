import React from "react";
import error from "../images/error.png";
import Navbar from "../components/Navbar";
import { STYLES } from "../utils/constants";

export default function NotFound() {
  return (
    <div className={STYLES.PARENT_DIV}>
      <Navbar />
      <section className={STYLES.FLEX_GAP_DIV}>
        <img
          src={error}
          alt="404 error: not found"
          className="w-28 md: w-72 mt-4 mb-4 md:mb-10 mx-auto"
        />

        <div className={STYLES.SECTION_DIVIDER} />
        <h1 className={STYLES.H_ONE}>
          Howdy, stranger. Not sure what you're lookin' for...
        </h1>
        <p className={STYLES.STANDARD_TEXT}>
          ...but it looks like you're a mite lost. If you keep on this trail you
          could end up runnin' into that evil forest spirit that hunts down
          aimless wanderers. Might be best if you just{" "}
          <a className={STYLES.IN_WRITING_ANCHOR} href="#/">
            turn around and head on home
          </a>
          .
        </p>
        <p className={STYLES.STANDARD_TEXT}>
          If you're lookin' for the carpenter's place, well that's just down the
          path over here to the left. I hear they're{" "}
          <a className={STYLES.IN_WRITING_ANCHOR} href="#/projects">
            workin' on some great projects
          </a>
          . Fine work they do yes indeed.
        </p>
        <p className={STYLES.STANDARD_TEXT}>
          What you got your eye on there? Oh no. No no no. Wait just a gut dag
          minute. Don't advise going there one bit, nope. Whispers are there's a
          strange old fellow livin' in them trees who{" "}
          <a className={STYLES.IN_WRITING_ANCHOR} href="#/about">
            won't stop talking about hisself
          </a>
          . Some reckon he's a warlock. Myself I'm inclined to thinkin' those
          folk are just as brain-addled as the old man himself. I'd still keep
          my distance though if I were a smart person such as yourself.
        </p>
        <p className={STYLES.STANDARD_TEXT}>
          Anyway it's high time I hoof it on outta here. It's fixin' to rain.
          Don't wanna catch a cold.
        </p>
        <p className={STYLES.STANDARD_TEXT}>
          Best of luck on the road, stranger, wherever it may lead.
        </p>
        <div className={STYLES.SECTION_DIVIDER} />
      </section>
    </div>
  );
}
