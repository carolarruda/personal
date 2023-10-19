import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";

const Main = () => {
  return (
    <div className="main-grid">
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default Main;
