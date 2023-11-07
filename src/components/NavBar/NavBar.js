import HomeLogo from "../HomeLogo/HomeLogo";
import classes from "./NavBar.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NavBarBigResol from "./NavBarBigResol copy";
import NavBarPhone from "./NavBarPhone";
import { useMediaQuery } from "react-responsive";
import Bloby from "../blobs/Bloby";
import NavBlob from "../blobs/NavBlob";

const NavBar = () => {
  const [selected, setSelected] = useState("");

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

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
          className={
            isDesktopOrLaptop
              ? `${classes.NavContainer} ${classes.mxAuto} ${classes.navOnTop}`
              : `${classes.NavContainer} ${classes.navOnTop} ${classes.padding}`
          }
          initial={{ y: -70 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HomeLogo />
          {isDesktopOrLaptop && <NavBarBigResol />}
          {isTabletOrMobile && <NavBarPhone />}
        </motion.nav>

        <motion.div className={classes.blob}
                  initial={{ y: -70 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5 }}
        >
          <NavBlob/>
        </motion.div>

    </header>
  );
};

export default NavBar;
