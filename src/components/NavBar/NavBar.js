import HomeLogo from "../HomeLogo/HomeLogo";
import classes from "./NavBar.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NavBarBigResol from "./NavBarBigResol copy";
import NavBarPhone from "./NavBarPhone";

const NavBar = () => {
  const [selected, setSelected] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    window.addEventListener("resize", handleResize);

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]); // Added handleResize as a dependency

  return (
    <header className={classes.NavBar}>
      <motion.nav
        className={`${classes.NavContainer} ${classes.mxAuto} ${classes.navOnTop}`}
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HomeLogo />
        {!isMobile && <NavBarBigResol />}
        {isMobile && <NavBarPhone />}
      </motion.nav>
    </header>
  );
};

export default NavBar;
