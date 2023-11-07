 import classes from './SectionTitle.module.scss'

const SectionTitle = ( { title, dir, noLine, menu}) => {
  return (
    <div
    className={classes.sectionHeader}
    style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    
  >
    <div className={!noLine ? `${classes.line}` : ''}  />
    <h3 >
     
        <span  className={classes.title} id={menu ?`${classes.menuOpts}` : `${classes.title}`}>
          {title}
          <span>.</span>
        </span>
     
    </h3>
  </div>
  );
};

export default SectionTitle;
