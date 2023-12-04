import classes from "./ButtonNew.module.scss";
import { useNavigate } from "react-router-dom";

const ButtonNew = ({ text, type, goBack }) => {
const nav = useNavigate()

  const handleGoToButton = () => {
    if( type === "projects"){
      document.getElementById("projects")?.scrollIntoView()
    }
    else if(goBack) {
      nav(-1)
    } else {
      window.open(
        "https://app.enhancv.com/share/ca9fed4a/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
      );
    }
  }
  return (
    <button className={!goBack ? `${classes.btnPastel}` : `${classes.noStyle}`}
    style={{width: goBack ? "min" : "8em", fontSize: goBack ? '20px' : ''}}
    onClick={handleGoToButton}
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
