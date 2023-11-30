import SectionTitle from "@components/utils/SectionTitles/SectionTitle";
import { AiOutlineArrowRight } from "react-icons/ai";
import classes from "./About.module.scss";
import Stats from "@components/Stats/Stats";
import MyLinks from "@components/Links/MyLinks";
import { Reveal } from "@utils/Reveal/Reveal";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from 'react-router-dom';

const About = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const nav = useNavigate();
  const navigateToAboutMe = () => {
    nav('/aboutme');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className={classes.sec}>
        <section className={`section-wrapper`} id="about">
          <SectionTitle title={"About"} dir={"l"} />
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
                  Hey! I&apos;m Carolina, a full-stack developer and recent
                  Software Development Academy graduate based in Gothenburg,
                  Sweden. As a full-stack developer, I am enthusiastic about
                  continuously improving my skills, embracing new technologies,
                  and continue learning.
                </p>
              </Reveal>
              <Reveal>
                <p className={classes.aboutText}>
                  Outside of work, you&apos;ll often find me in the kitchen,
                  either exploring new recipes or going back to my Portuguese
                  roots. Yoga enthusiast on my spare time.{" "}
                  <span onClick={navigateToAboutMe}>Get to know me {">"}</span>
                </p>
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

            <Stats />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
