/* eslint-disable jsx-a11y/alt-text */
import SectionTitle from "@utils/SectionTitles/SectionTitle";
import { Reveal } from "@utils/Reveal/Reveal";
import classes from "./AboutExpanded.module.scss";

import MyLinks from "@components/Links/MyLinks";
import { useMediaQuery } from "react-responsive";
import { AiOutlineArrowRight } from "react-icons/ai";


import carolinaPhoto from "../../images/photo3.jpg";

const AboutExpanded = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });


  return (
    <>
      <div className={classes.sec}>
        <section className={`section-wrapper`} id="">
          <SectionTitle title={"My story"} dir={"l"} />

          <div
            className={
              isDesktopOrLaptop
                ? `${classes.about}`
                : `${classes.about} ${classes.media}`
            }
          >
            <div>
              <Reveal>
                {" "}
        

                <p className={classes.aboutText}>
                I grew up in the Azores 🌴, Portugal, an archipelago in the middle of the Atlantic Ocean. I lived most of my life as an islander until I decided to move to sunny Lisbon to be with my partner. ☀️ And over a year ago, we found ourselves embracing yet another city in a new country, Gothenburg, Sweden. Adapting to the cold? Well, it's still a work in progress!
                </p>

                <p className={classes.aboutText}>

                For the past six years, I've thrived as an account manager, connecting with people from around the globe and relishing every moment of it. But life has a funny way of leading us down unexpected paths. My journey took a turn when I was helping companies find developers for their innovative ideas and projects: it ignited a curiosity for coding and problem-solving. So, I took the plunge and completed a boot camp to become a full-stack developer. Now, I'm excited to start this new chapter, combining my love for communication with my newfound tech skills.
                </p>
              </Reveal>
              <Reveal>
                <p className={classes.aboutText}></p>
              </Reveal>
              <Reveal>
                <div className={classes.links}>
                  <div className={classes.linksText}>
                    <span>Links</span>
                    <AiOutlineArrowRight />
                    <MyLinks />
                  </div>
                </div>
              </Reveal>
            </div>
            <div className={classes.photoContainer}>
              <img src={carolinaPhoto} className={classes.photo} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutExpanded;
