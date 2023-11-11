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

const AboutExpanded = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isPhone = useMediaQuery({ query: "(max-width: 720px)" });
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div className={classes.sec}>
        <section className={`section-wrapper`} id="about">
          <h3>Hey there! </h3>
          <h1>
            I'm Carolina<span>.</span>
          </h1>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non mollis nibh. Nulla quis aliquet neque. Integer volutpat interdum erat, ultrices convallis lacus congue vestibulum. Quisque nulla ante, dapibus eu pharetra ut, suscipit luctus quam. Praesent id dolor at magna facilisis lobortis ac non ipsum. Curabitur aliquet magna non ultricies rutrum. Ut tincidunt at ipsum id semper. Suspendisse eget vulputate leo.


                </p>
              </Reveal>
              <Reveal>
                <p className={classes.aboutText}>
                Maecenas hendrerit justo sit amet urna volutpat, in scelerisque nisl semper. Proin vel magna a neque laoreet rutrum. Suspendisse tempor velit in ex aliquet tempor. Mauris vitae molestie neque. Vivamus ullamcorper vestibulum scelerisque. Pellentesque efficitur ipsum magna, eu tempus enim scelerisque non. Nulla non tristique turpis. Suspendisse efficitur ornare vulputate. Aliquam nec ex et sem blandit iaculis nec non purus. Nam feugiat venenatis dolor feugiat sollicitudin. Nullam et nisl id metus consequat ullamcorper sed iaculis lorem. Nunc pharetra dui ut iaculis sodales. In hac habitasse platea dictumst. Nulla vitae lorem in risus rhoncus pharetra et tristique orci. Sed tincidunt at ex non convallis. Sed nec nibh dignissim elit consequat sagittis. 

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
