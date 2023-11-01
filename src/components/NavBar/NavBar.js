import DropDownHover from "../DropDown/DropDownHover";
import HomeLogo from "../HomeLogo/HomeLogo";
import NavBlob from "../blobs/NavBlob";
import Button from "../buttons/Button";
import classes from "./NavBar.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";



const NavBar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);


  return (
    <>
      <header className={classes}>
        <motion.nav
          className={`section-wrapper ${classes.NavContainer} ${classes.mxAuto}`}
          initial={{ y: -70 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HomeLogo />
          <ul className={classes.NavOptions}>
            <li className={classes.grey}>
              <a
                href="#top"
                onClick={() => {
                  setSelected("top");
                  window.scrollTo(0, 0);
                }}
                id={selected === "top" ? classes.selected : ""}
              >
                home
              </a>
            </li>
            <li className={classes.grey}>
              <a
                href="#about"
                onClick={() => {
                  setSelected("about");
                }}
                id={selected === "about" ? classes.selected : ""}
              >
                about
              </a>
            </li>

            <li className={classes.grey}>
              <a
                href="#projects"
                onClick={() => {
                  setSelected("projects");
                }}
                id={selected === "projects" ? classes.selected : ""}
              >
                projects
              </a>
            </li>
            <li className={classes.grey}>
              <a
                href="#contact"
                onClick={() => {
                  setSelected("contact");
                }}
                id={selected === "contact" ? classes.selected : ""}
              >
                contact
              </a>
            </li>
            <li>
              <Button text={`My Resume`} />
            </li>
          </ul>
        </motion.nav>
      </header>
      <motion.div
        className={classes.navDiv}
      >
        <NavBlob />
      </motion.div>
    </>
  );
};

export default NavBar;
