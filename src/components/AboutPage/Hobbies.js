/* eslint-disable jsx-a11y/alt-text */
import SectionTitle from "@utils/SectionTitles/SectionTitle";
import { Reveal } from "@utils/Reveal/Reveal";
import classes from "./AboutExpanded.module.scss";

import { useMediaQuery } from "react-responsive";

import { useState } from "react";

import Caroussel from "./Caroussel";
import { blogs } from "./Data";

const Hobbies = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isPhone = useMediaQuery({ query: "(max-width: 720px)" });
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div className={classes.sec}>
        <section className={`section-wrapper`} id="about">
          <SectionTitle title={"hobbies"} dir={"r"} />
          <div
            className={
              isDesktopOrLaptop
                ? `${classes.about}`
                : `${classes.about} ${classes.media}`
            }
          >
            <div className={classes.photoContainer}>
              <Caroussel blogs={blogs} />{" "}
            </div>

            <div>
              <Reveal>
                {" "}
                <p className={classes.aboutText}>
                  Outside of coding and the kitchen, I'm all about diving into
                  hobbies that keep life interesting. I love exploring – whether
                  it's roaming through Sweden's stunning outdoors or uncovering
                  cozy corners in local cafes that feel like hidden treasures.
                  And when I need a mental escape, you'll find me nose-deep in a
                  book.
                </p>
              </Reveal>
              <Reveal>
                <p className={classes.aboutText}>
                  Oh, and let's talk about learning Swedish! It's been a ride,
                  let me tell you. I'm making my way through the B1 level,
                  picking up phrases and slang that make me feel more like a
                  local. Sometimes it's a comical juggle of words and grammar,
                  but those moments when it clicks? They're pure gold.
                </p>

              </Reveal>
              <Reveal>
                <p>
                Here's a fun fact: during my childhood, I had an unconventional pet—a chicken named Joana. I was determined to teach her how to fly, but let's just say our flying lessons were only tale of ambition and, well, gravity.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hobbies;
