import HomeLogo from "../HomeLogo/HomeLogo";
import NavBlob from "../blobs/NavBlob";
import classes from "./NavBar.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [selectedHome, setSelectedHome] = useState(true); // Initially, set home as selected
  const [selectedAbout, setSelectedAbout] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState(false);
  const [selectedContact, setSelectedContact] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "home") {
            setSelectedHome(true);
            setSelectedAbout(false);
            setSelectedProjects(false);
            setSelectedContact(false);
          } else if (entry.target.id === "about") {
            setSelectedAbout(true);
            setSelectedHome(false);
            setSelectedProjects(false);
            setSelectedContact(false);
          } else if (entry.target.id === "projects") {
            setSelectedProjects(true);
            setSelectedHome(false);
            setSelectedAbout(false);
            setSelectedContact(false);
          } else if (entry.target.id === "contact") {
            setSelectedContact(true);
            setSelectedHome(false);
            setSelectedAbout(false);
            setSelectedProjects(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedHome(true);
        setSelectedAbout(false);
        setSelectedProjects(false);
        setSelectedContact(false);
      } else {
        setSelectedHome(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className={classes.navDiv}>
        <NavBlob />
      </div>

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
              href="#top" // Assuming #top is the top of your page
              onClick={() => {
                setSelectedHome(true);
                setSelectedAbout(false);
                setSelectedProjects(false);
                setSelectedContact(false);
                window.scrollTo(0, 0);
              }}
              id={selectedHome ? classes.selected : ""}
            >
              home
            </a>
          </li>
          <li className={classes.grey}>
            <a
              href="#about"
              onClick={() => {
                setSelectedAbout(true);
                setSelectedHome(false);
                setSelectedProjects(false);
                setSelectedContact(false);
              }}
              id={selectedAbout ? classes.selected : ""}
            >
              about
            </a>
          </li>
          <li className={classes.grey}>
            <a
              href="#projects"
              onClick={() => {
                setSelectedProjects(true);
                setSelectedHome(false);
                setSelectedAbout(false);
                setSelectedContact(false);
              }}
              id={selectedProjects ? classes.selected : ""}
            >
              projects
            </a>
          </li>
          <li className={classes.grey}>
            <a
              href="#contact"
              onClick={() => {
                setSelectedContact(true);
                setSelectedHome(false);
                setSelectedAbout(false);
                setSelectedProjects(false);
              }}
              id={selectedContact ? classes.selected : ""}
            >
              contact
            </a>
          </li>
          <li>
            <button className={classes.btn}>
              <span
                onClick={() =>
                  window.open(
                    "https://app.enhancv.com/share/ca9fed4a/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
                  )
                }
                className={classes.span}
              >
                My Resume
              </span>
            </button>
          </li>
        </ul>
      </motion.nav>
    </header>
  );
};

export default NavBar;
