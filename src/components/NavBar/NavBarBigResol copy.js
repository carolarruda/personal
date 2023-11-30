import Button from "../buttons/Button";
import classes from "./NavBar.module.scss";
import { Link } from "react-router-dom";
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
        <Link
          className={classes.aTag}
          onClick={() => {
            setSelected("home");
          }}
          id={selected === "home" ? classes.selected : ""}
          to={{ pathname: "/", hash: "#top" }}
          reloadDocument
        >
          Home
        </Link>
      </li>
      <li className={classes.grey}>
        <Link
          className={classes.aTag}
          onClick={() => {
            setSelected("about");
          }}
          id={selected === "about" ? classes.selected : ""}
          to={{ pathname: "/", hash: "#about" }}
          reloadDocument
        >
          About
        </Link>
      </li>

      <li className={classes.grey}>

        <Link
          className={classes.aTag}
          onClick={() => {
            setSelected("projects");
          }}
          id={selected === "projects" ? classes.selected : ""}
          to={{ pathname: "/", hash: "#projects" }}
          reloadDocument
        >
          Projects
        </Link>
      </li>
      <li className={classes.grey}>

        <Link
          className={classes.aTag}
          onClick={() => {
            setSelected("contact");
          }}
          id={selected === "contact" ? classes.selected : ""}
          to={{ pathname: "/", hash: "#contact" }}
          reloadDocument
        >
          Contact
        </Link>
      </li>
      <li>
        <Button text={`Resume`} />
      </li>
    </ul>
  );
};

export default NavBarBigResol;
