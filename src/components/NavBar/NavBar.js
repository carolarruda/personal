import HomeLogo from "../HomeLogo/HomeLogo";
import classes from "./NavBar.module.scss";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <header>
      <motion.nav
        className={`section-wrapper ${classes.NavContainer} ${classes.mxAuto}`}
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HomeLogo />

        <ul className={classes.NavOptions}>
          <li>
            <a>home</a>
          </li>
          <li>
            <a>projects</a>
          </li>
          <li>
            <a>about</a>
          </li>
          <li>
            <a>contact</a>
          </li>
        </ul>
      </motion.nav>
    </header>
  );
};

export default NavBar;
