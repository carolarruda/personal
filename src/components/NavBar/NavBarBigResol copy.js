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
        <Button text={`Resume`} />
      </li>
    </ul>
  );
};

export default NavBarBigResol;
