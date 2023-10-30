import DropDownHover from "../DropDown/DropDownHover";
import HomeLogo from "../HomeLogo/HomeLogo";
import NavBlob from "../blobs/NavBlob";
import Button from "../buttons/Button";
import classes from "./NavBar.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import carls from "../../images/Carls/Carls.png";
import movieDB from "../../images/MovieDB/VisualsDataBase.png";
import spot2 from "../../images/Spotify/Spot2.png";
import ecommerce from "../../images/ECommerce/EcommerceVisuals.png";

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

  const projects = [
    {
      title: "Carls",
      imgSrc: carls,
      code: "https://github.com/carolarruda/carls",
      projectLink: "",
      tech: ["React", "MUI", "JS", "Express"],
      description:
        "A recipe social network that allows users to register, authenticate and share their recipes",
      modalContent: (
        <>
          <p>
            Carls provides users with an intuitive interface to explore, create,
            update and delete personal recipes as well as share them in the
            platform.
          </p>
          <p>
            The tech stack includes React and for the backend Node.js and
            Express, with data stored in Postgres,SQL.
          </p>
        </>
      ),
    },
    {
      title: "Movie Database",
      imgSrc: movieDB,
      code: "https://github.com/carolarruda/movieDb",
      projectLink: "",
      tech: ["Node", "Express", "Postgres", "Authentication"],
      description:
        "A simple Movie Database project to keep track of all my comfort movies! This application allows users to authenticate and manage their movie collections",
      modalContent: (
        <>
          <p>
            The Movie Database is a pet project to keep track of all the movies
            I want to watch.
          </p>
          <p>
            I&apos;m currently working on adding new features to filter by genre
            and score and connecting the app to TMDb API - the movie database
          </p>
        </>
      ),
    },
    {
      title: "E-Commerce Website",
      imgSrc: ecommerce,
      code: "https://github.com/carolarruda/movieDb",
      projectLink: "",
      tech: ["Node", "Express", "Postgres", "Authentication"],
      description:
        "A simple Movie Database project to keep track of all my comfort movies! This application allows users to authenticate and manage their movie collections",
      modalContent: (
        <>
          <p>
            The Movie Database is a pet project to keep track of all the movies
            I want to watch.
          </p>
          <p>
            I&apos;m currently working on adding new features to filter by genre
            and score and connecting the app to TMDb API - the movie database
          </p>
        </>
      ),
    },
    {
      title: "Spotify Clone",
      imgSrc: spot2,
      code: "https://github.com/carolarruda/movieDb",
      projectLink: "",
      tech: ["Node", "Express", "Postgres", "Authentication"],
      description:
        "A simple Movie Database project to keep track of all my comfort movies! This application allows users to authenticate and manage their movie collections",
      modalContent: (
        <>
          <p>
            The Movie Database is a pet project to keep track of all the movies
            I want to watch.
          </p>
          <p>
            I&apos;m currently working on adding new features to filter by genre
            and score and connecting the app to TMDb API - the movie database
          </p>
        </>
      ),
    },
  ];

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
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavBlob />
      </motion.div>
    </>
  );
};

export default NavBar;
