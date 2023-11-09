import Button from "../buttons/Button";
import classes from "./NavBar.module.scss";

import { useEffect, useState } from "react";

const NavBarBigResol = () => {
  const [selected, setSelected] = useState("");

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
    <ul className={classes.NavOptions}>
      <li className={classes.grey}>
        <a
          className={classes.aTag}
          href="#top"
          onClick={() => {
            setSelected("top");
            window.scrollTo(0, 0);
          }}
          id={selected === "top" ? classes.selected : ""}
        >
          Home
        </a>
      </li>
      <li className={classes.grey}>
        <a
          className={classes.aTag}
          href="#about"
          onClick={() => {
            setSelected("about");
          }}
          id={selected === "about" ? classes.selected : ""}
        >
          About
        </a>
      </li>

      <li className={classes.grey}>
        <a
          className={classes.aTag}
          href="#projects"
          onClick={() => {
            setSelected("projects");
          }}
          id={selected === "projects" ? classes.selected : ""}
        >
          Projects
        </a>
      </li>
      <li className={classes.grey}>
        <a
          className={classes.aTag}
          href="#contact"
          onClick={() => {
            setSelected("contact");
          }}
          id={selected === "contact" ? classes.selected : ""}
        >
          Contact
        </a>
      </li>
      <li>
        <Button text={`Resume`} />
      </li>
    </ul>
  );
};

export default NavBarBigResol;
