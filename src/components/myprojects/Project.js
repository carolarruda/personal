import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import classes from "./projects.module.scss";
import { useMediaQuery } from "react-responsive";

export const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}) => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  const isPhone = useMediaQuery({ query: "(max-width: 720px)" });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className={classes.projectImage}
        >
          <img
            onMouseEnter={() => setHovered(true)}
            src={imgSrc}
            alt={title}
            style={{ transform: hovered && !isPhone ? "scale(1.15)" : "" }}
          />
        </div>
        <div className={classes.projectCopy}>
          <div className={classes.projectTitle}>
            <h4>{title}</h4>
            <div className={classes.projectTitleLine} />

            <a href={code} target="_blank" rel="nofollow noreferrer">
              <AiFillGithub size="2.8rem" />
            </a>
            {projectLink && (
              <a href={projectLink} target="_blank" rel="nofollow noreferrer">
                <AiOutlineExport size="2.8rem" />
              </a>
            )}
          </div>

          <div className={classes.projectTech}>{tech.join(" - ")}</div>

          <p className={classes.projectDescription}>
            {description}{" "}
            <span onClick={() => setIsOpen(true)}>Learn more {">"}</span>
          </p>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
