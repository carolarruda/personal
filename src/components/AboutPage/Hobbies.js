/* eslint-disable jsx-a11y/alt-text */
import { Reveal } from "@utils/Reveal/Reveal";
import classes from "./AboutExpanded.module.scss";
import { useMediaQuery } from "react-responsive";
import Caroussel from "./Caroussel";
import { blogs } from "./Data";

const Hobbies = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });


  return (
    <>
      <div className={classes.sec}>
        <section className={`section-wrapper`}>
       
          <div
            className={
              isDesktopOrLaptop
                ? `${classes.about} ${classes.hobbies}`
                : `${classes.about} ${classes.hobbies} ${classes.media}`
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
                  hobbies that keep life interesting. I love <span className={classes.tags}>exploring
                    </span> – whether
                  it's roaming through Sweden's stunning outdoors or uncovering
                  cozy corners in local cafes that feel like hidden gems.
                  And when I need a mental escape, you'll find me nose-deep in a
                  book.
                </p>
              </Reveal>
              <Reveal>
                <p className={classes.aboutText}>
                  Oh, and let's talk about learning <span  className={classes.tags}>Swedish</span> 🇸🇪! It's been a ride. I'm making my way through the B1 level
                  and getting help from my neigbour, who has been kind enough to help me.
                </p>

              </Reveal>
              <Reveal>
                <p>
                <span className={classes.tags}>Fun Fact:</span> during my childhood, I had an unconventional pet—a chicken named Joana. I was determined to teach her how to fly, but let's just say our flying lessons were only tale of ambition and, well, gravity 😄 
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
