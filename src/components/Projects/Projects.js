import SectionTitle from "../SectionTitles/SectionTitle";
// import carls from '../../images/Carls/browseRecipesView.png'
// import pc from '../../images/PC.png'
import project1 from "../../images/Visual.png";

import classes from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={classes.sec}>
      <div className={classes.CS}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="#d7d4db"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <section className={`section-wrapper`} id="about">
        <SectionTitle title={"Projects"} dir={"r"} />
        <div className={`classes.about`}>
          <div className={classes.projectContainer}>
            <p className={`${classes.aboutText} `}>My project</p>
            <div className={classes.containerProject}>
              <img src={project1} alt="pc-visuals" className={classes.photo} />
            </div>
          </div>
          <div
            id={classes.worksGrid}
            className={`
          ${classes.wLayout} ${classes.worksGrid} `}
          >
          
          </div>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="400px"
              height="150px"
              version="1.1"
            >
              <rect
                x="10"
                y="10"
                width="180"
                height="130"
                rx="15"
                ry="15"
                fill="#bb8774"
              />
            </svg>
        </div>
      </section>
    </div>
  );
};

export default Projects;
