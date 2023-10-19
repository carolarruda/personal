import Bloby from "../blobs/Bloby";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={`section-wrapper ${classes.hero} curve`}>
      <div className={classes.heroContainer}>
        {/* <div className={classes.heroBackground}>
          <Bloby width={"550px"}  fill={'var(--brand'}/>
        </div> */}

        <h1 className={classes.presentation}>
          Hey, I&apos;m Carolina<span>.</span>
        </h1>
        <h2 className={classes.subTitle}>
          I&apos;m a <span>Full Stack Developer</span>
        </h2>
        <p className={classes.aboutCopy}>
          I build responsive web apps with a focus on clean and organised code.
        </p>
      </div>
    </section>
  );
};

export default Hero;
