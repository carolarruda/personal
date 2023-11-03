import classes from "./Projects.module.scss";
import Projects from "../myprojects/Projects";
import SectionTitle from "../utils/SectionTitles/SectionTitle";
import ProjectBlob from "../blobs/ProjectBlob";
import { useMediaQuery } from "react-responsive";

const ProjectsContainer = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <div className={classes.sec}>
      <div className={classes.CS}>
        <ProjectBlob />
      </div>
      <section className={isDesktopOrLaptop ? `section-wrapper` : `section-wrapper-phone`}  id="about">
        <SectionTitle title="Projects" dir="r" />
        <Projects />
      </section>
    </div>
  );
};

export default ProjectsContainer;
