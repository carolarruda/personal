import classes from "./HomeLogo.module.scss";

const HomeLogo = () => {
  return (
    <span
      className={`${classes.logo} ${classes.pointer}`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      C<span>.</span>
    </span>
  );
};

export default HomeLogo;
