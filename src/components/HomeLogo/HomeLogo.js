import classes from "./HomeLogo.module.scss";
import { useMediaQuery } from "react-responsive";
import { Outlet, Link } from "react-router-dom";

const HomeLogo = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <>
      <Link to={{ pathname: "/", hash: "#top" }} reloadDocument>
        <button
          id={classes.border}
          className={
            isDesktopOrLaptop
              ? `${classes.logo} ${classes.pointer}`
              : `${classes.phone} ${classes.pointer}`
          }
        >
          C<span>.</span>
        </button>
      </Link>
      <Outlet />
    </>
  );
};

export default HomeLogo;
