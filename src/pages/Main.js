import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Projects from "../components/myprojects/Projects";




const Main = () => {


  return (
    <div className="main-grid">
      <NavBar />
      <Hero />
      <About />
      <Projects/>
      <Contact />

    </div>
  );
};

export default Main;
