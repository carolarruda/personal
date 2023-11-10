import classes from "./Hero.module.scss";
import ButtonNew from "../buttons/ButtonNew";

const Hero = () => {
  return (
    <>
      <section className={`section-wrapper ${classes.hero}`}>
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
          <ButtonNew type={`projects`} text={`View Projects`} />
        </div>
      </section>
      <div className={classes.BC}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
            fill="#e3d5d5"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Hero;
