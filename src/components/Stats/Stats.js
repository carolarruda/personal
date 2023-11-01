import { Reveal } from "../utils/Reveal/Reveal";
import classes from "./Stats.module.scss";
import { AiFillCode } from "react-icons/ai";

const Stats = () => {
  return (
    <div className={classes.stats}>
      <div className={classes.statColumn}>
        <h4>
          <AiFillCode size="2.4rem" color="var(--brand2)" />
          <span>My skills</span>
        </h4>
        <Reveal>
          <div className={classes.statGrid}>
            <span className="chip">React</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">JavaScript</span>
            <span className="chip">GIT</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Prisma</span>
            <span className="chip">SQL</span>
            <span className="chip">Express</span>
            <span className="chip">GitHub</span>
            <span className="chip">Postgres</span>
            <span className="chip">Material UI</span>
            <span className="chip">Figma</span>
            <span className="chip">Jasmine</span>
            <span className="chip">Jest</span>
            <span className="chip">RESTful APIs</span>
            <span className="chip">Authentication</span>
            <span className="chip">CI/CD</span>
            <span className="chip">TDD</span>
            <span className="chip">TypeScript</span>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Stats;
