import classes from "./HomeLogo.module.scss";
import { useMediaQuery } from "react-responsive";

const HomeLogo = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {isMobile && (
        <span
        id={classes.border}
          className={
            isDesktopOrLaptop
              ? `${classes.logo} ${classes.pointer}`
              : `${classes.phone} ${classes.pointer}`
          }
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          C<span>.</span>
        </span>
      )}
    </>
  );
};

export default HomeLogo;
