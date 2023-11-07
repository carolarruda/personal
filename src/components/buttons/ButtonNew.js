import classes from "./ButtonNew.module.scss";

const ButtonNew = ({ text, type }) => {
  return (
    <button className={classes.btnPastel}
    onClick={() => {
        type === "projects"
          ? document.getElementById("projects")?.scrollIntoView()
          : window.open(
              "https://app.enhancv.com/share/ca9fed4a/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
            );
      }}
    >
      <span className={classes.text}> {text}</span>
      <span className={classes.blob}></span>
      <span className={classes.blob}></span>
      <span className={classes.blob}></span>
      <span className={classes.blob}></span>
    </button>
  );
};

export default ButtonNew;
