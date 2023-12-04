import { AiOutlineArrowLeft } from "react-icons/ai";
import classes from "./GoBack.module.scss";
import ButtonNew from "../buttons/ButtonNew";

const GoBack = () => {
  return (
    <>
      <ButtonNew
        goBack={true}
        text={<AiOutlineArrowLeft className={classes.goBackArrow} />}
      />
    </>
  );
};

export default GoBack;
