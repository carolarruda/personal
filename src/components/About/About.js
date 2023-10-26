import SectionTitle from "../SectionTitles/SectionTitle";
import { AiOutlineArrowRight } from "react-icons/ai";
import classes from "./About.module.scss";
import Bloby from "../blobs/Bloby";
import Stats from "../Stats/Stats";
import MyLinks from '../Links/MyLinks'
const About = () => {
  return (
    <div className={classes.sec}>
      <div className="custom-shape-divider-top-1697701393">
        <Bloby />
      </div>
      <section className={`section-wrapper`} id="about" >
        <SectionTitle title={"About"} dir={"l"}  />
        <div className={classes.about} >
          <div>
            <p className={`${classes.aboutText} `}>
              Hey! I&apos;m Carolina, a full-stack developer and recent Software
              Development Academy graduate based in Gothenburg, Sweden.
              Motivated to learn new skills to pursue my passion in the tech
              industry and deliver high quality software to users.
            </p>

            <p className={classes.aboutText}>
              Outside of work, you&apos;ll often find me in the kitchen, either
              exploring new recipes or going back to my Portuguese roots. I also
              love Yoga.
            </p>

            <div className={classes.links}>
              <div className={classes.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
                <MyLinks/>
              </div>
            </div>
          </div>
          <Stats />
        </div>
      </section>
    </div>
  );
};

export default About;
