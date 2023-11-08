import SectionTitle from "@components/utils/SectionTitles/SectionTitle";
import { AiOutlineArrowRight } from "react-icons/ai";
import classes from "./About.module.scss";
import Bloby from "@components/blobs/Bloby";
import Stats from "@components/Stats/Stats";
import MyLinks from "@components/Links/MyLinks";
import { Reveal } from "@utils/Reveal/Reveal";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <div className={classes.sec}>
      <div className={classes.blobAbout}>
        <Bloby />
      </div>
      {/* <div className={classes.bloby}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={classes.shapeFill}
          ></path>
        </svg>
      </div> */}
      <section className="section-wrapper" id="about">
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
                Sweden. Eager to continuously expand my skill set and deliver
                high quality software to users.
              </p>
            </Reveal>
            <Reveal>
              <p className={classes.aboutText}>
                Outside of work, you&apos;ll often find me in the kitchen,
                either exploring new recipes or going back to my Portuguese
                roots. Yoga enthusiast on my spare time.
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
  );
};

export default About;
