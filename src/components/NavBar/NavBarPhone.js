import { useState } from 'react';
import classes from './NavBarPhone.module.scss';
import { AiOutlineMenu } from 'react-icons/ai';

const NavBarPhone = () => {
  const [selected, setSelected] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const handleItemClick = (item) => {
    setSelected(item);
    setMenuOpen(false); // Close the menu when an item is selected
  };

  return (
    <>
      <div onClick={handleMenu} className={classes.iconContainer}>
        <AiOutlineMenu className={classes.menuIcon} />
      </div>
      <div className={menuOpen ? classes.menuContainer : classes.closed}>
        <ul className={classes.NavOptions}>
          <li className={classes.grey}>
            <a href="#top" onClick={() => handleItemClick('top')}>
              Home
            </a>
          </li>
          <li className={classes.grey}>
            <a href="#about" onClick={() => handleItemClick('about')}>
              About
            </a>
          </li>
          <li className={classes.grey}>
            <a href="#projects" onClick={() => handleItemClick('projects')}>
              Projects
            </a>
          </li>
          <li className={classes.grey}>
            <a href="#contact" onClick={() => handleItemClick('contact')}>
              Contact
            </a>
          </li>
          <li>
            <a href="https://app.enhancv.com/share/ca9fed4a/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" onClick={() => handleItemClick('projects')}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBarPhone;
