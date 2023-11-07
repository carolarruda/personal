import classes from "./Hero.module.scss";
import Button from "../buttons/Button";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <section className={`section-wrapper ${classes.hero}`}>
      <div className={classes.copyWrapper}>
        <h1 className={classes.title}>
          Hey, I&apos;m Carolina<span>.</span>
        </h1>

        <h2 className={classes.subTitle}>
          I&apos;m a <span>Full Stack Developer </span>based in Sweden
        </h2>

        <p className={classes.aboutCopy}>
          I build responsive web applications, with a focus on clean, organized
          code that brings ideas to life. Let&apos;s build something together!
        </p>

        <div className={classes.btnContainer}>
          <Button
            type={`projects`}
            text={`View Projects`}
            media={"classes.media"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
