import classes from "./NavBarPhone.module.scss";
import SectionTitle from "@utils/SectionTitles/SectionTitle";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NavBarPhone = () => {
  let [isOpen, setisOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);


function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
 
        window.removeEventListener('resize', handleWindowSizeChange);
    }

   
}, []);

const isMobile = width <= 768;

const backdropInitialY = isMobile ? -900 : -1400; 
  const menuInitialY = isMobile ? -900 : -1400; 


console.log('ismobile', isMobile);

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
        initial={{ y: backdropInitialY }}
        animate={isOpen ? { y: 0 } : { y: backdropInitialY }}
        transition={{ duration: 0.6 }}
        onClick={() => {
          setisOpen(false);
        }}
      ></motion.div>

      <motion.div
        className={classes.menu}
        initial={{ y: menuInitialY }}
        animate={isOpen ? { y: 0 } : { y: menuInitialY }}
        transition={{ duration: 0.6 }}
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
