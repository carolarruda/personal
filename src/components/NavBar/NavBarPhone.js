import { useState } from "react";
import classes from "./NavBarPhone.module.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBarPhone = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <button onClick={handleMenu} className={classes.iconContainer}>
        {menuOpen ? (
          <AiOutlineClose className={classes.menuIcon} />
        ) : (
          <AiOutlineMenu className={classes.menuIcon} />
        )}
      </button>
     
        <div style={{display: menuOpen ? 'initial' : 'none'}}  className={classes.menuContainer}>
          <ul className={classes.NavOptions}>
            <li className={classes.grey}>
              <a href="#top" onClick={handleItemClick}>
                Home
              </a>
            </li>
            <li className={classes.grey}>
              <a href="#about" onClick={handleItemClick}>
                About
              </a>
            </li>
            <li className={classes.grey}>
              <a href="#projects" onClick={handleItemClick}>
                Projects
              </a>
            </li>
            <li className={classes.grey}>
              <a href="#contact" onClick={handleItemClick}>
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://app.enhancv.com/share/ca9fed4a/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
                onClick={handleItemClick}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
 
    </>
  );
};

export default NavBarPhone;
