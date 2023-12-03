import classes from "./NavBarPhone.module.scss";
import SectionTitle from "@utils/SectionTitles/SectionTitle";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBarPhone = () => {
  let [isOpen, setisOpen] = useState(false);
  const [height, setHeight] = useState(window.innerHeight);

  function handleWindowSizeChange() {
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const nav = useNavigate()

  return (
    <>
      <div className={classes.container}>
        <button
          type="button"
          onClick={() => {
            setisOpen((prevState) => !prevState);
          }}
          className={
            isOpen
              ? `${classes.hamburger} ${classes.open}`
              : `${classes.hamburger}`
          }
        >
          <div id={classes.bar1} className={classes.bar}></div>
          <div id={classes.bar2} className={classes.bar}></div>
          <div id={classes.bar3} className={classes.bar}></div>
        </button>
      </div>

      <motion.div
        className={`${classes.backDrop} ${isOpen ? "active" : ""}`}
        initial={{ y: -height }}
        animate={isOpen ? { y: 0 } : { y: -height }}
        transition={{ duration: 0.6 }}
        onClick={() => {
          setisOpen(false);
          nav('/')
        }}
      ></motion.div>

      <motion.div
        className={classes.menu}
        initial={{ y: -height }}
        animate={isOpen ? { y: 0 } : { y: -height }}
        transition={{ duration: 0.6 }}
      >
        <Link
          onClick={() => {
            setisOpen(false);
            nav('/')
          }}
          to={{ pathname: "/", hash: "#top" }}
          reloadDocument
        >
          <SectionTitle title={"Home"} dir={"l"} noLine={true} menu={true} />
        </Link>
        <Link
          onClick={() => {
            setisOpen(false);
            nav('/')
          }}
          to={{ pathname: "/", hash: "#about" }}
          reloadDocument
        >
          {" "}
          <SectionTitle title={"About"} dir={"l"} noLine={true} menu={true} />
        </Link>
        <Link
          onClick={() => {
            setisOpen(false);
            nav('/')
            
          }}
          to={{ pathname: "/", hash: "#projects" }}

          reloadDocument
        >
          <SectionTitle
            title={"Projects"}
            dir={"l"}
            noLine={true}
            menu={true}
          />
        </Link>
        <Link
          to={{ pathname: "/", hash: "#contact" }}
          reloadDocument
          onClick={() => {
            setisOpen(false);
            nav('/')
          }}
        >
          <SectionTitle title={"Contact"} dir={"l"} noLine={true} menu={true} />
        </Link>

        <button
          onClick={() => {
            window.open(
              "https://app.enhancv.com/share/ca9fed4a/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
            );
            setisOpen(false);
          }}
        >
          <SectionTitle
            title={"Resume"}
            dir={"l"}
            noLine={true}
            menu={true}
            icon={true}
          />
        </button>
      </motion.div>
    </>
  );
};

export default NavBarPhone;
