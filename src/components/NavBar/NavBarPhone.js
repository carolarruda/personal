import classes from "./NavBarPhone.module.scss";
import SectionTitle from "@utils/SectionTitles/SectionTitle";
import { motion } from "framer-motion";
import { useState } from "react";

const NavBarPhone = () => {
  let [isOpen, setisOpen] = useState(false);

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
        initial={{ y: -1400 }}
        animate={isOpen ? { y: 0 } : { y: -1400 }}
        exit={{ y: -1400 }}
        transition={{ duration: 0.6 }}
        onClick={() => {
          setisOpen(false);
        }}
      ></motion.div>

      <motion.div
        className={classes.menu}
        initial={{ y: -1400 }}
        animate={isOpen ? { y: 0 } : { y: -1400 }}
        exit={{ y: -1400 }}
        transition={{ duration: 0.8 }}
      >
        <button
          onClick={() => {
            document
              .querySelector(`#top`)
              .scrollIntoView({ behavior: "smooth" });
            setisOpen(false);
          }}
        >
          <SectionTitle title={"Home"} dir={"l"} noLine={true} menu={true} />
        </button>
        <button
          onClick={() => {
            document
              .querySelector(`#about`)
              .scrollIntoView({ behavior: "smooth" });
            setisOpen(false);
          }}
        >
          <SectionTitle title={"About"} dir={"l"} noLine={true} menu={true} />
        </button>
        <button
          onClick={() => {
            document
              .querySelector(`#projects`)
              .scrollIntoView({ behavior: "smooth" });
            setisOpen(false);
          }}
        >
          <SectionTitle
            title={"Projects"}
            dir={"l"}
            noLine={true}
            menu={true}
          />
        </button>
        <button
          onClick={() => {
            document
              .querySelector(`#contact`)
              .scrollIntoView({ behavior: "smooth" });
            setisOpen(false);
          }}
        >
          <SectionTitle title={"Contact"} dir={"l"} noLine={true} menu={true} />
        </button>

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
