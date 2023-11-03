import HomeLogo from "../HomeLogo/HomeLogo";
import classes from "./NavBar.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NavBarBigResol from "./NavBarBigResol copy";
import NavBarPhone from "./NavBarPhone";
import { useMediaQuery } from 'react-responsive'

const NavBar = () => {
  const [selected, setSelected] = useState("");


  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })



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
    sections.forEach((section) => observer.observe(section));

  }, []); 

  return (
    <header className={classes.NavBar}>
      <motion.nav
        className={isDesktopOrLaptop ? `${classes.NavContainer} ${classes.mxAuto} ${classes.navOnTop}` : `${classes.NavContainer} ${classes.navOnTop} ${classes.padding}` }
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HomeLogo />
        {(isDesktopOrLaptop)  && <NavBarBigResol />}
        {(isTabletOrMobile)  && <NavBarPhone />}
      </motion.nav>
    </header>
  );
};

export default NavBar;
