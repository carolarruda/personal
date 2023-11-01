import SectionTitle from "../utils/SectionTitles/SectionTitle";
import { AiOutlineArrowRight } from "react-icons/ai";
import classes from "./About.module.scss";
import Bloby from "../blobs/Bloby";
import Stats from "../Stats/Stats";
import MyLinks from "../Links/MyLinks";
import { Reveal } from "../utils/Reveal/Reveal";
const About = () => {
  return (
    <div className={classes.sec}>
      <div>
        <Bloby />
      </div>
      <section className={`section-wrapper`} id="about">
        <SectionTitle title={"About"} dir={"l"} />
        <div className={classes.about}>
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
    
                  <span>My links</span>
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
