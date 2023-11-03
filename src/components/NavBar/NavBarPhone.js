import { useState } from "react";
import classes from "./NavBarPhone.module.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import BackDrop from "../utils/Backdrop/Backdrop";
import SectionTitle from "../utils/SectionTitles/SectionTitle";

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
      <button
        type="button"
        onClick={handleMenu}
        className={classes.iconContainer}
      >
        {isOpen ? (
          <AiOutlineClose className={classes.menuIcon} />
        ) : (
          <AiOutlineMenu className={classes.menuIcon} />
        )}
      </button>

      {isOpen && (
        <>
          <BackDrop />
          <div className={classes.menu}>
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
          </div>
        </>
      )}
    </>
  );
};

export default NavBarPhone;
