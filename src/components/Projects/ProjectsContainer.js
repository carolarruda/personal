import classes from "./Projects.module.scss";
import Projects from "../myprojects/Projects";
import SectionTitle from "../SectionTitles/SectionTitle";
import ProjectBlob from "../blobs/ProjectBlob";

const ProjectsContainer = () => {
  return (
    <div className={classes.sec}>
      <div className={classes.CS}>
        <ProjectBlob />
      </div>
      <section className={`section-wrapper`} id="about">
      <SectionTitle title="Projects" dir="r" />
      <Projects />
      </section>
    </div>
  );
};

export default ProjectsContainer;
