 import classes from './SectionTitle.module.scss'
 interface Props {
    title: string;
    dir?: "l" | "r";
  }
const SectionTitle = ( { title, dir}: Props ) => {
  return (
    <div
    className={classes.sectionHeader}
    style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
  >
    <div className={classes.line} />
    <h3>
     
        <span className={classes.title}>
          {title}
          <span>.</span>
        </span>
     
    </h3>
  </div>
  );
};

export default SectionTitle;
