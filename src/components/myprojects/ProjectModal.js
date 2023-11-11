import classes from "./projectmodal.module.scss";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

import {
  AiFillGithub,
  AiOutlineExport,
  // AiOutlineInfoCircle,
} from "react-icons/ai";
import { MdClose } from "react-icons/md";

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}) => {
  const [disabledProject, setDisabledProject] = useState("");
  const [disabledCode, setDisabledCode] = useState("");

  useEffect(() => {
    const body = document.querySelector("body");

    if (!projectLink) {
      setDisabledProject(true);
    } else if (!code) {
      setDisabledCode(true);
    } else if (isOpen) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "scroll";
    }
  }, [isOpen, code, projectLink]);

  const content = (
    <div className={classes.modal} onClick={() => setIsOpen(false)}>
      <button className={classes.closeModalBtn}>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={classes.modalCard}
      >
        <img className={classes.modalImage} src={imgSrc} alt={title} />
        <div className={classes.modalContent}>
          <h4>{title}</h4>
          <div className={classes.modalTech}>{tech.join(" - ")}</div>

          <div className={classes.suppliedContent}>
            {modalContent}{" "}
            {/* <a target="_blank" rel="nofollow noreferrer" href={projectLink}>
              <AiOutlineInfoCircle /> detailed overview
            </a> */}
          </div>

          <div className={classes.modalFooter}>
            <p className={classes.linksText}>
              Project Links<span>.</span>
            </p>
            <div className={classes.links}>
              <a
                target="_blank"
                rel="nofollow noreferrer"
                href={code}
                className={disabledCode ? classes.disabled : ""}
              >
                <AiFillGithub /> source code
              </a>
              {!disabledProject && (
                <a
                  target="_blank"
                  rel="nofollow noreferrer"
                  href={projectLink}
                  className={disabledProject ? classes.disabled : ""}
                >
                  <AiOutlineExport /> live project
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  return ReactDOM.createPortal(content, document.getElementById("root"));
};
