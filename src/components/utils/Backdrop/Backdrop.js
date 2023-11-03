import classes from "./Backdrop.module.scss";
import { motion } from "framer-motion";

const BackDrop = () => {
  return (
    <motion.div className={classes.backDrop}
    initial={{ y: -1000 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    ></motion.div>
  );
};

export default BackDrop;