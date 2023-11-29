import classes from "./HomeLogo.module.scss";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const HomeLogo = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const nav = useNavigate();
  const handleHomeLogo = () => {
    if ("/aboutme") {
      nav("/");
    } else if ("/") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <button
      id={classes.border}
      className={
        isDesktopOrLaptop
          ? `${classes.logo} ${classes.pointer}`
          : `${classes.phone} ${classes.pointer}`
      }
      onClick={handleHomeLogo}
    >
      C<span>.</span>
    </button>
  );
};

export default HomeLogo;
