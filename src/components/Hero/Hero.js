import classes from "./Hero.module.scss";
import Button from "../buttons/Button";
import {motion } from 'framer-motion'
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <section 
    className={isDesktopOrLaptop ? `section-wrapper ${classes.hero} curve` : `section-wrapper-phone  ${classes.heroMedia} `} 
    >
      <motion.div
                initial={{ y: -70 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
      className={classes.heroContainer}>
        <h1 className={classes.presentation}>
          Hey there, I&apos;m Carolina<span>.</span>
        </h1>
        <h2 className={classes.subTitle}>
          I&apos;m a <span>Full Stack Developer </span>based in
          Gothenburg, Sweden
        </h2>
        <p className={classes.aboutCopy}>
          I build responsive web applications, with a big focus on clean,
          organized code that brings ideas to life. Let&apos;s build something
          incredible together!
        </p>
        <Button type={`projects`} text={`View Projects`} />
      </motion.div>
    </section>
  );
};

export default Hero;
