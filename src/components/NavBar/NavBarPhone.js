import Button from "../buttons/Button";
import classes from "./NavBar.module.scss";
import { AiOutlineMenu } from "react-icons/ai";

import { useEffect, useState } from "react";

const NavBarPhone = () => {
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
    <>
      <AiOutlineMenu />
    </>
  );
};

export default NavBarPhone;
