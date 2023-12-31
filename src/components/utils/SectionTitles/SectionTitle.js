import classes from "./SectionTitle.module.scss";
import { AiOutlineExport } from "react-icons/ai";

const SectionTitle = ({ title, dir, noLine, menu, icon, className }) => {


  return (
    <div
      className={menu ? `${classes.sectionHeader}` : `${classes.sectionTitle}`}
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse", marginTop: className || menu ? "0px" : "10.8rem" }}
    >
      {!noLine && <div className={classes.line} />}

      <h3 className={classes.align}>
        {icon && (
          <>
            <AiOutlineExport /> {"   "}
          </>
        )}

        <span
          className={classes.title}
          id={menu ? `${classes.menuOpts}` : `${classes.title}`}
        >
          {"   "} {title}
          <span>.</span>
        </span>
      </h3>
      
    </div>

    
  );
};

export default SectionTitle;
