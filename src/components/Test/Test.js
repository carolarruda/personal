import { Link } from "react-scroll";
import Button from "../buttons/Button";
import classes from './Test.module.scss'

const Test = () => {
  return (
    <section className="section-wrapper" id="home">
      <div className={classes.section}>
        <div className={classes.container}>
          <h1 className={classes.title}>
            Delivering quality for your users
          </h1>
          <p className={classes.pTag}>
            I build responsive web apps with a focus on clean and organised
            code.
          </p>
          <div className={classes.btnContainer}>
            <Link
              to="projects"
              activeClass="active-nav"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-150}
              duration={500}
            >
              <Button type={`projects`} text={`View Projects`}  />
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Test;
