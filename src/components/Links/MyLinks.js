import classes from "./MyLinks.module.scss";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const MyLinks = () => {
  return (
    <div className={classes.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <a
          href="https://www.linkedin.com/in/carolinacalouroarruda"
          target="_blank noreferrer"

        >
          <AiFillLinkedin size="3rem" />
        </a>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <a
          href="https://github.com/carolarruda"
          target="_blank noreferrer"
        >
          <AiFillGithub size="3rem" />
        </a>
      </motion.span>
    </div>
  );
};

export default MyLinks;
