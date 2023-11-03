import { useState } from "react";
import classes from "./NavBarPhone.module.scss";
import SectionTitle from "../utils/SectionTitles/SectionTitle";
import { motion } from "framer-motion";

const NavBarPhone = () => {
  let [isOpen, setisOpen] = useState(false);

  const handleMenu = () => {
    setisOpen((prevState) => !prevState);
  };

  const handleItemClick = () => {
    setisOpen(false);
  };

  return (
    <>
    <div className={classes.container}>
    <button
        type="button"
        onClick={handleMenu}
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
    

      {isOpen && (
        <>
          <motion.div
            className={classes.backDrop}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          ></motion.div>

          <motion.div
            className={classes.menu}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a href="#top" onClick={handleItemClick}>
              <SectionTitle title={"Home"} dir={"l"} noLine={true} />
            </a>
            <a href="#about" onClick={handleItemClick}>
              <SectionTitle title={"About"} dir={"l"} noLine={true} />
            </a>
            <a href="#projects" onClick={handleItemClick}>
              <SectionTitle title={"Projects"} dir={"l"} noLine={true} />
            </a>
            <a href="#contact" onClick={handleItemClick}>
              <SectionTitle title={"Contact"} dir={"l"} noLine={true} />
            </a>

            <a
              href="https://app.enhancv.com/share/ca9fed4a/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
              onClick={handleItemClick}
            >
              <SectionTitle title={"Resume"} dir={"l"} noLine={true} />{" "}
            </a>
          </motion.div>
        </>
      )}
    </>
  );
};

export default NavBarPhone;
