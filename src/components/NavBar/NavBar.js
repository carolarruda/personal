import HomeLogo from "../HomeLogo/HomeLogo";
import classes from "./NavBar.module.scss";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <section className="section-wrapper">
   <motion.nav
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.NavContainer}
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
    </section>
 
  );
};

export default NavBar;
