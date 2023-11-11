/* eslint-disable jsx-a11y/alt-text */
import SectionTitle from "@utils/SectionTitles/SectionTitle";
import { Reveal } from "@utils/Reveal/Reveal";
import classes from "./AboutExpanded.module.scss";
import Stats from "@components/Stats/Stats";
import MyLinks from "@components/Links/MyLinks";
import { useMediaQuery } from "react-responsive";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

import carolinaPhoto from "../../images/photo3.jpg";
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
          <SectionTitle title={"Hobbies"} dir={"r"} />
          <div
            className={
              isDesktopOrLaptop
                ? `${classes.about}`
                : `${classes.about} ${classes.media}`
            }
          >
            <div className={classes.photoContainer}>
            <Caroussel blogs={blogs} />            </div>

            <div>
              <Reveal>
                {" "}
                <p className={classes.aboutText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  non mollis nibh. Nulla quis aliquet neque. Integer volutpat
                  interdum erat, ultrices convallis lacus congue vestibulum.
                  Quisque nulla ante, dapibus eu pharetra ut, suscipit luctus
                  quam. Praesent id dolor at magna facilisis lobortis ac non
                  ipsum. Curabitur aliquet magna non ultricies rutrum. Ut
                  tincidunt at ipsum id semper. Suspendisse eget vulputate leo.
                </p>
              </Reveal>
              <Reveal>
                <p className={classes.aboutText}>
                  Maecenas hendrerit justo sit amet urna volutpat, in
                  scelerisque nisl semper. Proin vel magna a neque laoreet
                  rutrum. Suspendisse tempor velit in ex aliquet tempor. Mauris
                  vitae molestie neque. Vivamus ullamcorper vestibulum
                  scelerisque. Pellentesque efficitur ipsum magna, eu tempus
                  enim scelerisque non. Nulla non tristique turpis. Suspendisse
                  efficitur ornare vulputate. 
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
