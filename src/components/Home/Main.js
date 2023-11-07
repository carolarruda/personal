import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import ProjectsContainer from "../Projects/ProjectsContainer";
import Contact from "../Contact/Contact";
import Test from "../Test/Test";
import classes from "./Main.module.scss";

const Main = () => {
  return (
    <div className={classes.home}>
      <NavBar />
      <Hero />
      <About />
      <ProjectsContainer />
      <Contact />
      <div
        style={{
          height: "200px",
          background:
            "linear-gradient(180deg, var(--background), var(--background-dark))",
        }}
      />
    </div>
  );
};

export default Main;
