import SectionTitle from "../SectionTitles/SectionTitle";
import { AiOutlineArrowRight } from "react-icons/ai";
import classes from "./About.module.scss";
import Bloby from "../blobs/Bloby";
import Goggles from "../blobs/Goggles";

const About = () => {
  return (
    <div className={classes.sec}>
      <div class="custom-shape-divider-top-1697701393">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
          fill="#e9e1d8"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <section className={`section-wrapper`} id="about">
        <SectionTitle title={"About"} dir={"l"} />
        <div className={`classes.about`}>
          <div>
            {/* <div className={classes.heroBackground}>
     <Goggles width={"1300px"} fill={'#ebb2b6'} />
   </div> */}

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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
