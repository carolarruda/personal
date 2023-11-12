import classes from "./Stats.module.scss";
import { AiFillCode } from "react-icons/ai";
import {motion} from 'framer-motion'

const Stats = () => {
  return (
    <div className={classes.stats}>
      <motion.div 
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
      className={classes.statColumn}>
        <h4>
          <AiFillCode size="2.4rem" color="var(--brand)" />
          <span>Skills</span>
        </h4>

          <div className={classes.statGrid}>
            <span className="chip">Front-end</span>
            <span className="chip">Back-end</span>
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
            <span className="chip">PostgresSQL</span>
            <span className="chip">Material UI</span>
            <span className="chip">Figma</span>
            <span className="chip">Jasmine</span>
            <span className="chip">Jest</span>
            <span className="chip">RESTful APIs</span>
            <span className="chip">Authentication</span>
            <span className="chip">CI/CD</span>
            <span className="chip">TDD</span>
            <span className="chip">Scrum</span>
            <span className="chip">Kanban</span>
            <span className="chip">TypeScript</span>
          </div>

      </motion.div>
    </div>
  );
};

export default Stats;
