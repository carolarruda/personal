import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import ProjectsContainer from "../components/Projects/ProjectsContainer";
import Contact from "../components/Contact/Contact";
import Test from "../components/Test/Test";



const Main = () => {


  return (
    <div className="main-grid">
      <NavBar />
      <Hero />
      <About />
      <ProjectsContainer />
      <Contact />

    </div>
  );
};

export default Main;
