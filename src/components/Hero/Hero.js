import classes from "./Hero.module.scss";
import Button from "../buttons/Button";

const Hero = () => {
  return (
    <section className={`section-wrapper ${classes.hero} curve`}>
      <div className={classes.heroContainer}>
        <h1 className={classes.presentation}>
          Hey there, I&apos;m Carolina<span>.</span>
        </h1>
        <h2 className={classes.subTitle}>
          I&apos;m a <span>Full Stack Developer </span>based in Gothenburg,
          Sweden
        </h2>
        <p className={classes.aboutCopy}>
          I build responsive web apps with a focus on clean and organised code.
        </p>
        <Button
          type={`projects`}
          text={`View Projects`}        />
      </div>
    </section>
  );
};

export default Hero;
